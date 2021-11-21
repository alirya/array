import ArrayParameter, { ArrayArgument } from "./array-parameter";
import ArrayParameters from "./array-parameters";
declare namespace Array {
    const Parameter: typeof ArrayParameter;
    const Object: typeof ArrayParameters;
    type Argument = ArrayArgument;
}
export default Array;
