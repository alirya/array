import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import { ListCallbackArgument, ListCallbackParameter } from "./list-callback-parameter";
import ListCallbackParameters from "./list-callback-parameters";
declare namespace ListCallback {
    const Parameters: typeof ListCallbackParameters;
    const Parameter: typeof ListCallbackParameter;
    type Argument<MessageType = unknown, ValidatorType extends Validator = Validator, Validatables extends Instance[] = Instance[], ValidatableType extends Validatable = Validatable> = ListCallbackArgument<MessageType, ValidatorType, Validatables, ValidatableType>;
}
export default ListCallback;
