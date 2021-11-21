import AssertArray from "../assert/array";
import ArrayError from "../assert/throwable/array-parameters";
export default function ArrayParameters(value, error = ArrayError) {
    AssertArray(value, error);
    return value;
}
//# sourceMappingURL=array-parameters.js.map