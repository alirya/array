import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Instance from "@dikac/t-validator/validatable/dynamic";
import MapCallbackParameter, { ValueCallbackArgument } from "./map-callback-parameter";
import MapCallbackParameters from "./map-callback-parameters";
declare namespace MapCallback {
    const Parameter: typeof MapCallbackParameter;
    const Parameters: typeof MapCallbackParameters;
    type Argument<Validators extends Validator[] = Validator[], Result extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable, ValueType extends ListParameter<Validators> = ListParameter<Validators>> = ValueCallbackArgument<Validators, Result, MessageType, ValidatableType>;
}
export default MapCallback;
