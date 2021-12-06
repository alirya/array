import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/subject/list/allow";
import Instance from "@dikac/t-validator/validatable/validatable";
import MapCallbackParameter, {ValueCallbackArgument} from "./map-callback-parameter";
import MapCallbackParameters from "./map-callback-parameters";


namespace MapCallback {

    export const Parameter = MapCallbackParameter;
    export const Parameters = MapCallbackParameters;
    export type Argument<
        Validators extends Validator[] = Validator[],
        Result extends Instance[] = Instance[],
        MessageType = unknown,
        ValidatableType extends Validatable = Validatable,
        ValueType extends ListParameter<Validators> = ListParameter<Validators>
    > = ValueCallbackArgument<
        Validators,
        Result,
        MessageType,
        ValidatableType
    >;
}

export default MapCallback;


