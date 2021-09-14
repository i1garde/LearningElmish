import { SumCalculator } from "./Types.fs.js";

export function init() {
    return new SumCalculator(0, 0, 0);
}

export function update(message, state) {
    switch (message.tag) {
        case 1: {
            const x_1 = message.fields[0] | 0;
            return new SumCalculator(state.FirstNum, x_1, state.Result);
        }
        case 2: {
            return new SumCalculator(state.FirstNum, state.SecondNum, state.FirstNum + state.SecondNum);
        }
        default: {
            const x = message.fields[0] | 0;
            return new SumCalculator(x, state.SecondNum, state.Result);
        }
    }
}

