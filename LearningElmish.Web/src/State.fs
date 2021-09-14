module App.State

open App
open App
open App.Types

let init () = {
    FirstNum = 0
    SecondNum = 0
    Result = 0
}

let update message state =
    match message with
    | SetFirstNum x ->
        { state with FirstNum = x }
    | SetSecondNum x ->
        { state with SecondNum = x }
    | Count ->
        { state with Result =
            state.FirstNum + state.SecondNum }