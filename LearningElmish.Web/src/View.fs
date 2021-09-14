module App.View

open System
open App.Types
open Fable.React
open Feliz
open Fulma

let view (state : SumCalculator) dispatch =
    Button.button [ Button.Color IsDark ]
                [ str "Dark" ]
    (*Html.div [
        Html.h2 "First number:"
        Html.br []
        Html.input [
        prop.id "first-num"
        prop.type' "number"
        prop.min 0
        prop.max 50
        prop.onChange (SetFirstNum >> dispatch)
        ]
        Html.br []
        Html.h2 "Second number:"
        Html.br []
        Html.input [
            prop.id "second-num"
            prop.type' "number"
            prop.min 0
            prop.max 50
            prop.onChange (SetSecondNum >> dispatch)
        ]
        Html.br []
        Html.button [
            prop.onClick (fun _ -> dispatch Count)
            prop.text "Sum"
            
        ]
        Html.br []
        Html.h2 "Result:"
        Html.h1 state.Result
        Html.div [
            prop.id "main"
            prop.className "shiny"
            prop.children [
                Html.text "Дюдя, хало)))"
            ]
        ]
    ]*)
    