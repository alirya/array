import ListArgument from "../../subject/list/allow";
import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import ValidatorsContainer from "../../validators/validators";
import ValueInterface from "@dikac/t-value/value";
import MapParameters from "./map-parameters";

export type MapArgument<
    Validators extends Validator[]
> =
    ValueInterface<ListArgument<Validators>> &
    ValidatorsContainer<Validators>

export default function MapParameter<
    Validators extends Validator[]
>(
    {
        value,
        validators,
    } : MapArgument<Validators>
) : ListReturn<Validators> {

    return MapParameters(value, validators);
}
