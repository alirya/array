import ListParameters from "./list-parameters";
import ListParameter from "./list-parameter";
/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */
declare namespace List {
    const Parameter: typeof ListParameter;
    const Parameters: typeof ListParameters;
}
export default List;
