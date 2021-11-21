import ListParameters from "./list-parameters";
import ListParameter from "./list-parameter";

/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */

namespace List {

    export const Parameter : typeof ListParameter = ListParameter;
    export const Parameters : typeof ListParameters = ListParameters;
}
export default List;
