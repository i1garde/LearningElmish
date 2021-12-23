module App.View

open System
open App.Types
open Fable.React
open Feliz
open Fulma

let view (state : SumCalculator) dispatch =
    Html.div [
        Html.h2 [
            prop.id "main-elements"
            prop.text "First number:"
        ]
        Html.br []
        Html.div [
            prop.id "main-elements"
            prop.children [
                Html.input [
                    prop.id "main-elements"
                    prop.type' "number"
                    prop.min 0
                    prop.max 50
                    prop.onChange (SetFirstNum >> dispatch)
                ]
            ]
        ]
        
        Html.br []
        Html.h2 [
            prop.id "main-elements"
            prop.text "Second number:"
        ]
        Html.br []
        Html.div [
            prop.id "main-elements"
            prop.children [
                Html.input [
                    prop.id "main-elements"
                    prop.type' "number"
                    prop.min 0
                    prop.max 50
                    prop.onChange (SetSecondNum >> dispatch)
                ]
            ]
        ]
        
        Html.br []
        Html.div [
            prop.id "main-elements"
            prop.children [
                Html.button [
                    prop.id "main-elements"
                    prop.onClick (fun _ -> dispatch Count)
                    prop.text "Sum"
                ]
            ]
        ]
        
        Html.br []
        Html.h2 [
            prop.id "main-elements"
            prop.text ("Result: " + string state.Result)
        ]
        Html.h1 [
            prop.id "info-text"
            prop.text "Простий додаток для знаходження суми чисел."
        ]
    ]