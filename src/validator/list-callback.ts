import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import {ListCallbackArgument, ListCallbackParameter} from "./list-callback-parameter";
import ListCallbackParameters from "./list-callback-parameters";

namespace ListCallback {

    export const Parameters = ListCallbackParameters;
    export const Parameter = ListCallbackParameter;
    export type Argument<
        MessageType = unknown,
        ValidatorType extends Validator = Validator,
        Validatables extends Instance[] = Instance[],
        ValidatableType extends Validatable  = Validatable
    > = ListCallbackArgument<
        MessageType,
        ValidatorType,
        Validatables,
        ValidatableType
    >;
}
export default ListCallback;
