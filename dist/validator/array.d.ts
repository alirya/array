import ArrayParameter from "./value-callback-parameter";
import ArrayParameters from "./value-callback-parameters";
/**
 *  validate if value is array
 */
declare namespace Array {
    const Parameter: typeof ArrayParameter;
    const Parameters: typeof ArrayParameters;
}
export default Array;
