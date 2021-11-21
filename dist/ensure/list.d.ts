import ListParameters from "./list-parameters";
import ListParameter, { ListArgument } from "./list-parameter";
/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */
declare namespace List {
    const Parameter: typeof ListParameter;
    const Parameters: typeof ListParameters;
    type Argument<Value extends Argument, Argument extends unknown> = ListArgument<Value, Argument>;
}
export default List;
