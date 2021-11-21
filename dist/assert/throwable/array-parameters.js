import ArrayType from "../string/array-parameters";
export default function ArrayParameters(value, subject = 'type', conversion = value => typeof value) {
    return new Error(ArrayType(value, false, subject, conversion));
}
//# sourceMappingURL=array-parameters.js.map