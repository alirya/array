import Validator from "@dikac/t-validator/validator";
import Union from "../../../union";
import Map from "../../../map";
import {List as ListHelper} from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";

export default function List<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    values : ValueType,
    validator : ValidatorType,
) : Map<ValueType, InferReturn<ValidatorType>> {

    const result : Map<ValueType, InferReturn<ValidatorType>> | Union<Map<ValueType, InferReturn<ValidatorType>>> = [];

    for(const [property, value] of values.entries()) {

        const validatable = validator(value);

        result[property] = <InferReturn<ValidatorType>> validatable;
    }

    return <Map<ValueType, InferReturn<ValidatorType>>> result;
}
