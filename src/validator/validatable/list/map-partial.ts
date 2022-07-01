import ListArgument from '../../subject/list/allow';
import ListReturn from './infer';
import Validator from '@alirya/validator/validator';
import {List} from 'ts-toolbelt';
import ListStrict from './infer';
import Unions from '../../../unions';
import Value from '@alirya/value/value';
import ValidatorsContainer from '../../validators/validators';

export function MapPartialParameters<
    Validators extends Validator[]
>(
    values : ListArgument<Validators>,
    validators : Validators,
    stop : boolean = false
) : Unions<ListStrict<Validators>> {

    const result : ListReturn<Validators>|Unions<ListStrict<Validators>> = [];

    for(let [property, validator] of validators.entries()) {

        const value = values[property];
        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return  result;
}


export type MapPartialArgument<
    Validators extends Validator[]
> =
    Value<ListArgument<Validators>> &
    ValidatorsContainer<Validators> &
    {stop?:boolean};

export function MapPartialParameter<
    Validators extends Validator[]
>(
    {
        value,
        validators,
        stop
    } : MapPartialArgument<Validators>
) : Unions<ListStrict<Validators>> {

    return MapPartialParameters(value, validators, stop);
}


namespace MapPartial {
    export const Parameters = MapPartialParameters;
    export const Parameter = MapPartialParameter;
    export type Argument<Validators extends Validator[]> = MapPartialArgument<Validators>;
}
export default MapPartial;
