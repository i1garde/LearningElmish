module App.Types

type SumCalculator = {
    FirstNum : int
    SecondNum : int
    Result : int
}

type Message =
    | SetFirstNum of int
    | SetSecondNum of int
    | Count