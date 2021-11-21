import Validator from "@dikac/t-validator/validator";
import Unions from "../../../unions";
import Map from "../../../map";
import {List as ListHelper} from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/infer-static";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import ListPartialParameters from "./list-partial-parameters";



export type ListPartialArgument<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
> =
    Value<ValueType> &
    ValidatorContainer<ValidatorType> &
    {stop?:boolean};

export default function ListPartialParameter<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    {
        value,
        validator,
        stop
    } : ListPartialArgument<ValueType, ValidatorType>
) : Unions<Map<ValueType, InferReturn<ValidatorType>>> {

    return ListPartialParameters(value, validator, stop);
}
