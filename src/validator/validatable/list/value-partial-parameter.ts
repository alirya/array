import Validator from "@alirya/validator/validator";
import ListStrict from "./infer";
import Unions from "../../../unions";
import Value from "@alirya/value/value";
import ValidatorsContainer from "../../validators/validators";
import ValuePartialParameters from "./value-partial-parameters";

export type ValuePartialArgument<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
> =
    Value<ValueType> &
    ValidatorsContainer<Validators> &
    {stop?:boolean};

export default function ValuePartialParameter<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    {
        value,
        validators,
        stop
    } : ValuePartialArgument<ValueType, Validators>
) : Unions<ListStrict<Validators>> {

    return ValuePartialParameters(value, validators, stop);
}
