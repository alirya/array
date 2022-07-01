import ListReturn from './infer';
import Validator from '@alirya/validator/validator';
import {List} from 'ts-toolbelt';
import ListStrict from './infer';
import Unions from '../../../unions';
import Value from '@alirya/value/value';
import ValidatorsContainer from '../../validators/validators';


export function ValueParameters<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    value : ValueType,
    validators : Validators,
) : ListReturn<Validators> {

    const result : ListReturn<Validators> | Unions<ListStrict<Validators>> = <Unions<ListStrict<Validators>>>[];

    for(const [property, validator] of validators.entries()) {

        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

    }

    return <ListReturn<Validators>> result;
}



export type ValueArgument<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
> =
    Value<ValueType> &
    ValidatorsContainer<Validators>;

export function ValueParameter<
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


namespace Value {
    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;
    export type Argument<
        ValueType,
        Validators extends Validator<unknown, ValueType>[]
    > = ValueArgument<
        ValueType,
        Validators
    >;
}
export default Value;
