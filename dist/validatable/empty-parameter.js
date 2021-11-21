import EmptyParameters from "./empty-parameters";
export default function EmptyParameter(
// value : Values,
// message : (result:Readonly<Value<Values> & Validatable>)=>MessageType,
{ value, message, }) {
    return EmptyParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=empty-parameter.js.map