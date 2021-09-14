module App

open Elmish
open Elmish.React
open Feliz
open App.Types
open App.State
open App.View

Program.mkSimple init update view
|> Program.withReactSynchronous "elmish-app"
|> Program.run