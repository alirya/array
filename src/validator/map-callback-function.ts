import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import BaseList from "./base/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import MapCallback from "./map-callback";
import MapCallbackInterface from "./map";
/**
 * function factory for {@link MapCallback}
 *
 * type return has better handling by typescript
 */
export default function MapCallbackFunction<
    Validators extends Validator[] = Validator[],
    Validatables extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>(
    validators : Validators,
    map : (value:BaseList<Validators>, validators:Validators)=>Validatables,
    validation : (result:Validatables)=>ValidatableType,
    message : (result:Validatables)=>MessageType
) : MapCallbackInterface<Validators, Validatables, MessageType, ValidatableType> {

    return MapCallback(validators, map, validation, message) as
        MapCallbackInterface<Validators, Validatables, MessageType, ValidatableType>;
}



