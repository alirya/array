import ListParameters from "./list-parameters";
export default function ListParameter(
// value : unknown,
// valid : boolean,
// expect : string,
// subject : string = 'type',
// conversion : (value:unknown)=>string = value=>typeof value,
{ value, valid, expect, subject, conversion, }) {
    return ListParameters(value, valid, expect, subject, conversion);
}
//# sourceMappingURL=list-parameter.js.map