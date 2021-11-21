import Callback from "@dikac/t-function/assert/callback-parameters";
import Guard from "../boolean/list";
/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */
export default function ListParameters(list, validation, error) {
    Callback(list, (value) => Guard(value, validation), error);
}
//# sourceMappingURL=list-parameters.js.map