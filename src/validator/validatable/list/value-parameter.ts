import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import ValidatorsContainer from "../../validators/validators";
import ValueParameters from "./value-parameters";

export type ValueArgument<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
> =
    Value<ValueType> &
    ValidatorsContainer<Validators>

export default function ValueParameter<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    {
        value,
        validators,
    } : ValueArgument<ValueType, Validators>
) : ListReturn<Validators> {

    return ValueParameters(value, validators);
}
