import ArrayType from "../string/array-parameters";
export default function ArrayParameter(
// string : unknown,
// subject : string = 'type',
// conversion : (value: unknown)=>string = value=>typeof value,
{ value, subject, conversion, }) {
    return new Error(ArrayType(value, false, subject, conversion));
}
//# sourceMappingURL=array-parameter.js.map