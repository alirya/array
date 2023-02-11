import Validator from '@alirya/validator/validator.js';
import Unions from '../../../unions.js';
import Map from '../../../map.js';
import {List as ListHelper} from 'ts-toolbelt';
import InferReturn from '@alirya/validator/validatable/infer-static.js';
import Value from '@alirya/value/value.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';


export function ListParameters<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    values : ValueType,
    validator : ValidatorType,
) : ListReturn<ValueType, ValidatorType> {

    const result : Map<ValueType, InferReturn<ValidatorType>> | Unions<Map<ValueType, InferReturn<ValidatorType>>> = [];

    for(const [property, value] of values.entries()) {

        const validatable = validator(value);

        result[property] = <InferReturn<ValidatorType>> validatable;
    }

    return <Map<ValueType, InferReturn<ValidatorType>>> result;
}




export type ListArgument<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
> =
    Value<ValueType> &
    ValidatorContainer<ValidatorType>;

export function ListParameter<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    {
        value,
        validator,
    } : ListArgument<ValueType, ValidatorType>
) : ListReturn<ValueType, ValidatorType> {

    return ListParameters(value, validator);
}

export type ListReturn<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
> = Map<ValueType, InferReturn<ValidatorType>>;

namespace List {
    export const Parameters = ListParameters;
    export const Parameter = ListParameter;
    export type Argument<
        ValueType extends unknown[],
        ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
    > = ListArgument<
        ValueType,
        ValidatorType
    >;
    export type Return<
        ValueType extends unknown[],
        ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
    > = ListReturn<
        ValueType,
        ValidatorType
    >;
}
export default List;
