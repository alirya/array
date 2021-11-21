import ListParameters from "./list-parameters";
export default function ListParameter(
// string : unknown,
// expect : string,
// subject : string = 'type',
// conversion : (value: unknown)=>string = value=>typeof value,
{ value, expect, subject, conversion, }) {
    return ListParameters(value, expect, subject, conversion);
}
//# sourceMappingURL=list-parameter.js.map