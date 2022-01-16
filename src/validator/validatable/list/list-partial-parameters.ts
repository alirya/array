import Validator from '@alirya/validator/validator';
import Unions from '../../../unions';
import Map from '../../../map';
import {List as ListHelper} from 'ts-toolbelt';
import InferReturn from '@alirya/validator/validatable/infer-static';

export default function ListPartialParameters<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    values : ValueType,
    validator : ValidatorType,
    stop : boolean = false
) : Unions<Map<ValueType, InferReturn<ValidatorType>>> {

    const result : Unions<Map<ValueType, InferReturn<ValidatorType>>> = [];

    for(const [property, value] of values.entries()) {

        const validatable = validator(value);

        result[property] = <InferReturn<ValidatorType>> validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return result;
}
