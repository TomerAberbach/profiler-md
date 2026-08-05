-- Aggregates a Twitter search response with aeson: decode the document, tally
-- hashtags, languages, and mentions, then re-encode the summary and decode it
-- back so both directions of the codec are sampled.
{-# LANGUAGE OverloadedStrings #-}

module Main (main) where

import Control.Applicative ((<|>))
import Control.Monad (forM_)
import Data.Aeson (FromJSON (..), ToJSON (..), object, withObject, (.:), (.:?), (.=))
import qualified Data.Aeson as Aeson
import qualified Data.ByteString.Lazy as ByteString
import Data.List (sortOn)
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Maybe (fromMaybe)
import Data.Ord (Down (..))
import Data.Text (Text)
import qualified Data.Text as Text
import System.Environment (getArgs)
import System.Exit (die)

data Search = Search
  { searchStatuses :: [Status]
  }

data Status = Status
  { statusText :: Text
  , statusLang :: Maybe Text
  , statusRetweets :: Int
  , statusFavorites :: Int
  , statusUser :: User
  , statusEntities :: Entities
  }

data User = User
  { userScreenName :: Text
  , userFollowers :: Int
  , userStatuses :: Int
  }

data Entities = Entities
  { entityHashtags :: [Text]
  , entityMentions :: [Text]
  }

instance FromJSON Search where
  parseJSON = withObject "Search" $ \o -> Search <$> o .: "statuses"

instance FromJSON Status where
  parseJSON = withObject "Status" $ \o ->
    Status
      <$> o .: "text"
      <*> o .:? "lang"
      <*> o .: "retweet_count"
      <*> o .: "favorite_count"
      <*> o .: "user"
      <*> o .: "entities"

instance FromJSON User where
  parseJSON = withObject "User" $ \o ->
    User <$> o .: "screen_name" <*> o .: "followers_count" <*> o .: "statuses_count"

instance FromJSON Entities where
  parseJSON = withObject "Entities" $ \o ->
    Entities <$> (map tagText <$> o .: "hashtags") <*> (map tagText <$> o .: "user_mentions")

-- A hashtag's name is in `text` and a mention's in `screen_name`.
newtype Tag = Tag {tagText :: Text}

instance FromJSON Tag where
  parseJSON = withObject "Tag" $ \o ->
    Tag <$> (o .: "text" <|> o .: "screen_name")

data Summary = Summary
  { summaryHashtags :: [(Text, Int)]
  , summaryLanguages :: [(Text, Int)]
  , summaryMentions :: [(Text, Int)]
  , summaryInfluencers :: [(Text, Int)]
  , summaryEngagement :: Int
  }

instance ToJSON Summary where
  toJSON summary =
    object
      [ "hashtags" .= counts (summaryHashtags summary)
      , "languages" .= counts (summaryLanguages summary)
      , "mentions" .= counts (summaryMentions summary)
      , "influencers" .= counts (summaryInfluencers summary)
      , "engagement" .= summaryEngagement summary
      ]
    where
      counts = map (\(key, count) -> object ["key" .= key, "count" .= count])

instance FromJSON Summary where
  parseJSON = withObject "Summary" $ \o ->
    Summary
      <$> (map pair <$> o .: "hashtags")
      <*> (map pair <$> o .: "languages")
      <*> (map pair <$> o .: "mentions")
      <*> (map pair <$> o .: "influencers")
      <*> o .: "engagement"
    where
      pair (Count key count) = (key, count)

data Count = Count Text Int

instance FromJSON Count where
  parseJSON = withObject "Count" $ \o -> Count <$> o .: "key" <*> o .: "count"

tally :: [Text] -> Map Text Int
tally = foldl' (\acc key -> Map.insertWith (+) key 1 acc) Map.empty

top :: Int -> Map Text Int -> [(Text, Int)]
top n = take n . sortOn (Down . snd) . Map.toList

summarize :: [Status] -> Summary
summarize statuses =
  Summary
    { summaryHashtags = top 10 (tally (concatMap (entityHashtags . statusEntities) statuses))
    , summaryLanguages = top 10 (tally (map (fromMaybe "und" . statusLang) statuses))
    , summaryMentions = top 10 (tally (concatMap (entityMentions . statusEntities) statuses))
    , summaryInfluencers = top 10 (influence statuses)
    , summaryEngagement = sum (map engagement statuses)
    }
  where
    engagement status = statusRetweets status + statusFavorites status
    influence =
      foldl'
        (\acc status -> Map.insertWith max (userScreenName (statusUser status)) (userFollowers (statusUser status)) acc)
        Map.empty

-- Tallies the long words in the decoded text, a second pass over the response
-- worth measuring alongside the codec.
keywords :: [Status] -> Map Text Int
keywords = tally . concatMap (filter ((> 3) . Text.length) . Text.words . Text.toLower . statusText)

roundTrip :: Summary -> Either String Summary
roundTrip = Aeson.eitherDecode . Aeson.encode

pad :: Int -> ByteString.ByteString -> ByteString.ByteString
pad iteration document =
  ByteString.append (ByteString.replicate (fromIntegral iteration) 0x20) document

main :: IO ()
main = do
  args <- getArgs
  (path, iterations) <- case args of
    [path, iterations] -> pure (path, read iterations :: Int)
    _ -> die "usage: profile <twitter.json> <iterations>"

  document <- ByteString.readFile path
  forM_ [1 .. iterations] $ \iteration -> do
    -- JSON allows leading whitespace, so padding the document makes each
    -- iteration's bytes distinct. Without it GHC floats the loop-invariant
    -- decode out of the loop and the run measures one decode.
    case Aeson.eitherDecode (pad iteration document) of
      Left message -> die message
      Right search -> do
        let statuses = searchStatuses search
            summary = summarize statuses
        case roundTrip summary of
          Left message -> die message
          Right decoded ->
            print
              ( length (summaryHashtags decoded)
              , summaryEngagement decoded
              , Map.size (keywords statuses)
              , length (map (userStatuses . statusUser) statuses)
              )
