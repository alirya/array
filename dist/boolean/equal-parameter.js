import EqualParameters from "./equal-parameters";
export default function EqualParameter(
//array1 : ReadonlyArray<Value>,
//array2 : ReadonlyArray<Value>,
//compare : (value1:Value, value2:Value) => boolean = EqualBoolean,
{ list: [array1, array2], compare }) {
    return EqualParameters(array1, array2, compare);
}
//# sourceMappingURL=equal-parameter.js.map