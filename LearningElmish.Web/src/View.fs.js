import { createElement } from "react";
import { Interop_reactApi } from "./.fable/Feliz.1.52.0/Interop.fs.js";
import { int32ToString, round } from "./.fable/fable-library.3.2.9/Util.js";
import { Message } from "./Types.fs.js";
import { ofArray } from "./.fable/fable-library.3.2.9/List.js";

export function view(state, dispatch) {
    const children = ofArray([createElement("h2", {
        id: "main-elements",
        children: "First number:",
    }), createElement("br", {}), createElement("div", {
        id: "main-elements",
        children: Interop_reactApi.Children.toArray([createElement("input", {
            id: "main-elements",
            type: "number",
            min: 0,
            max: 50,
            onChange: (ev) => {
                const value_14 = ev.target.valueAsNumber;
                if ((!(value_14 == null)) ? (value_14 !== NaN) : false) {
                    dispatch(new Message(0, round(value_14)));
                }
            },
        })]),
    }), createElement("br", {}), createElement("h2", {
        id: "main-elements",
        children: "Second number:",
    }), createElement("br", {}), createElement("div", {
        id: "main-elements",
        children: Interop_reactApi.Children.toArray([createElement("input", {
            id: "main-elements",
            type: "number",
            min: 0,
            max: 50,
            onChange: (ev_1) => {
                const value_31 = ev_1.target.valueAsNumber;
                if ((!(value_31 == null)) ? (value_31 !== NaN) : false) {
                    dispatch(new Message(1, round(value_31)));
                }
            },
        })]),
    }), createElement("br", {}), createElement("div", {
        id: "main-elements",
        children: Interop_reactApi.Children.toArray([createElement("button", {
            id: "main-elements",
            onClick: (_arg1) => {
                dispatch(new Message(2));
            },
            children: "Sum",
        })]),
    }), createElement("br", {}), createElement("h2", {
        id: "main-elements",
        children: "Result: " + int32ToString(state.Result),
    }), createElement("h1", {
        id: "info-text",
        children: "Простий додаток для знаходження суми чисел.",
    })]);
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    });
}

