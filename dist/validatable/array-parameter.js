import ArrayParameters from "./array-parameters";
export default function ArrayParameter({ value, message, }) {
    return ArrayParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=array-parameter.js.map