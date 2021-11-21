import Validator from "@dikac/t-validator/validator";
import { List as ListHelper } from "ts-toolbelt";
import ListParameter from "./list-parameter";
import ListParameters from "./list-parameters";
import { ListPartialArgument } from "./list-partial-parameter";
declare namespace List {
    const Parameter: typeof ListParameter;
    const Parameters: typeof ListParameters;
    type Argument<ValueType extends unknown[], ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>> = ListPartialArgument<ValueType, ValidatorType>;
}
export default List;
