import ArrayParameters from "./array-parameters";
import ArrayParameter from "./array-parameter";

/**
 * assert if {@param array} is array of {@template Value}
 *
 * {@param validation} is use to validate for {@template array}
 *
 * @param error
 */

namespace Array {

    export const Parameter : typeof ArrayParameter = ArrayParameter;
    export const Parameters : typeof ArrayParameters = ArrayParameters;
}
export default Array;
