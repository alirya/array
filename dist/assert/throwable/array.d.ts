import ArrayParameters from "./array-parameters";
import ArrayParameter from "./array-parameter";
/**
 * assert if {@param array} is array of {@template Value}
 *
 * {@param validation} is use to validate for {@template array}
 *
 * @param error
 */
declare namespace Array {
    const Parameter: typeof ArrayParameter;
    const Parameters: typeof ArrayParameters;
}
export default Array;
