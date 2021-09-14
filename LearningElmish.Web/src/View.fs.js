import { Option, button } from "./.fable/Fulma.2.3.0/Elements/Button.fs.js";
import { Color_IColor } from "./.fable/Fulma.2.3.0/Common.fs.js";
import { singleton } from "./.fable/fable-library.3.2.9/List.js";

export function view(state, dispatch) {
    return button(singleton(new Option(0, new Color_IColor(1))), singleton("Dark"));
}

