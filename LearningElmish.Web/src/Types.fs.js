import { Union, Record } from "./.fable/fable-library.3.2.9/Types.js";
import { union_type, record_type, int32_type } from "./.fable/fable-library.3.2.9/Reflection.js";

export class SumCalculator extends Record {
    constructor(FirstNum, SecondNum, Result) {
        super();
        this.FirstNum = (FirstNum | 0);
        this.SecondNum = (SecondNum | 0);
        this.Result = (Result | 0);
    }
}

export function SumCalculator$reflection() {
    return record_type("App.Types.SumCalculator", [], SumCalculator, () => [["FirstNum", int32_type], ["SecondNum", int32_type], ["Result", int32_type]]);
}

export class Message extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["SetFirstNum", "SetSecondNum", "Count"];
    }
}

export function Message$reflection() {
    return union_type("App.Types.Message", [], Message, () => [[["Item", int32_type]], [["Item", int32_type]], []]);
}

