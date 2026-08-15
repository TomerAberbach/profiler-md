-module(profile).
-export([doc/1, run/1]).

%% eflambe traces every function call, so encoding/decoding the whole ~600 KB
%% document produces a >100 MB trace; one status keeps the capture a few MB.
doc(Path) ->
    {ok, Bin} = file:read_file(Path),
    [Status | _] = maps:get(<<"statuses">>, decode(Bin)),
    Status.

%% The traced entry point. eflambe traces this call's stack; the frames land in
%% the collapsed output as `profile:run/1;json:encode/1` etc.
run(Doc) ->
    lists:foldl(
        fun(_I, Acc) ->
            Json = encode(Acc),
            decode(Json)
        end,
        Doc,
        lists:seq(1, 5)
    ).

%% --- JSON via OTP's built-in `json` module (OTP 27+) ------------------------
encode(Term) ->
    iolist_to_binary(json:encode(Term)).

decode(Bin) ->
    json:decode(Bin).
