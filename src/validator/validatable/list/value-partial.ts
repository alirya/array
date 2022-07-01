import Validator from '@alirya/validator/validator';
import {List} from 'ts-toolbelt';
import ListStrict from './infer';
import Unions from '../../../unions';
import Value from '@alirya/value/value';
import ValidatorsContainer from '../../validators/validators';

export function ValuePartialParameters<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    value : ValueType,
    validators : Validators,
    stop : boolean = false
) : ValuePartialReturn<ValueType, Validators> {

    const result : Unions<ListStrict<Validators>> = [];

    for(const [property, validator] of validators.entries()) {

        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return  result;
}


export type ValuePartialArgument<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
> =
    Value<ValueType> &
    ValidatorsContainer<Validators> &
    {stop?:boolean};

export function ValuePartialParameter<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    {
        value,
        validators,
        stop
    } : ValuePartialArgument<ValueType, Validators>
) : ValuePartialReturn<ValueType, Validators> {

    return ValuePartialParameters(value, validators, stop);
}

export type ValuePartialReturn<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
    > =  Unions<ListStrict<Validators>>;

namespace ValuePartial {
    export const Parameters = ValuePartialParameters;
    export const Parameter = ValuePartialParameter;
    export type Return<
        ValueType,
        Validators extends Validator<unknown, ValueType>[]
    > = ValuePartialReturn<
        ValueType,
        Validators
    >;
    export type Argument<
        ValueType,
        Validators extends Validator<unknown, ValueType>[]
    > = ValuePartialArgument<
        ValueType,
        Validators
    >;
}
export default ValuePartial;
