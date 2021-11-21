import ArrayParameter from "./array-parameter";
import ArrayParameters from "./array-parameters";
declare namespace Array {
    const Parameter: typeof ArrayParameter;
    const Parameters: typeof ArrayParameters;
}
export default Array;
