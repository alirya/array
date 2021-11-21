import ArrayParameters from "./array-parameters";
export default function ArrayParameter(
// value : Values,
// message : (result:Readonly<Value<Values> & Validatable>)=>MessageType,
{ value, message, }) {
    return ArrayParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=array-parameter.js.map