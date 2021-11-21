import Validator from "@dikac/t-validator/validator";
import {List as ListHelper} from "ts-toolbelt";
import ListPartialParameter, {ListPartialArgument} from "./list-partial-parameter";
import ListPartialParameters from "./list-partial-parameters";


namespace ListPartial {

    export const Parameter = ListPartialParameter;
    export const Parameters = ListPartialParameters;
    export type Argument<
        ValueType extends unknown[],
        ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
    > = ListPartialArgument<
        ValueType,
        ValidatorType
    >;
}
export default ListPartial;
