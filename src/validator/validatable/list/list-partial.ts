import Validator from "@dikac/t-validator/validator";
import Union from "../../../union";
import Map from "../../../map";
import {List as ListHelper} from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";

export default function ListPartial<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    values : ValueType,
    validator : ValidatorType,
    stop : boolean = false
) : Union<Map<ValueType, InferReturn<ValidatorType>>> {

    const result : Union<Map<ValueType, InferReturn<ValidatorType>>> = [];

    for(const [property, value] of values.entries()) {

        const validatable = validator(value);

        result[property] = <InferReturn<ValidatorType>> validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return result;
}
