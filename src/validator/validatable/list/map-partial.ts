import ListArgument from '../../subject/list/allow.js';
import ListReturn from './infer.js';
import Validator from '@alirya/validator/validator.js';
import {List} from 'ts-toolbelt';
import ListStrict from './infer.js';
import Unions from '../../../unions.js';
import Value from '@alirya/value/value.js';
import ValidatorsContainer from '../../validators/validators.js';

export function MapPartialParameters<
    Validators extends Validator[]
>(
    values : ListArgument<Validators>,
    validators : Validators,
    stop : boolean = false
) : Unions<ListStrict<Validators>> {

    const result : ListReturn<Validators>|Unions<ListStrict<Validators>> = [];

    for(const [property, validator] of validators.entries()) {

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
