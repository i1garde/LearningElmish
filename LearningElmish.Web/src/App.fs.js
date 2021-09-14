import { ProgramModule_mkSimple, ProgramModule_run } from "./.fable/Fable.Elmish.4.0.0-alpha-2/program.fs.js";
import { Program_withReactSynchronous } from "./.fable/Fable.Elmish.React.4.0.0-alpha-1/react.fs.js";
import { update, init } from "./State.fs.js";
import { view } from "./View.fs.js";

ProgramModule_run(Program_withReactSynchronous("elmish-app", ProgramModule_mkSimple(init, (message, state) => update(message, state), (state_1, dispatch) => view(state_1, dispatch))));

