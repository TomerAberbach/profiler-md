-module(profile).
-export([doc/1, run/1]).

%% eflambe traces every function call, so encoding and decoding the whole
%% ~600 KB document traces over 100 MB. One status keeps the capture a few MB.
doc(Path) ->
    {ok, Bin} = file:read_file(Path),
    [Status | _] = maps:get(<<"statuses">>, decode(Bin)),
    Status.

run(Doc) ->
    lists:foldl(
        fun(_I, Acc) ->
            Json = encode(Acc),
            decode(Json)
        end,
        Doc,
        lists:seq(1, 5)
    ).

%% OTP's `json` module requires OTP 27.
encode(Term) ->
    iolist_to_binary(json:encode(Term)).

decode(Bin) ->
    json:decode(Bin).
