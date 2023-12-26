import ListArgument from '../../subject/list/allow.js';
import ListReturn from './infer.js';
import Validator from '@axiona/validator/validator.js';
import {List} from 'ts-toolbelt';
import ListStrict from './infer.js';
import Unions from '../../../unions.js';
import ValidatorsContainer from '../../validators/validators.js';
import ValueInterface from '@axiona/value/value.js';


export function MapParameters<
    Validators extends Validator[]
>(
    values : ListArgument<Validators>,
    validators : Validators
) : ListReturn<Validators>  {

    const result : ListReturn<Validators>|Unions<ListStrict<Validators>> = <Unions<ListStrict<Validators>>>[];

    for(const [property, validator] of validators.entries()) {

        const value = values[property];
        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;
    }

    return <ListReturn<Validators>> result;
}


export type MapArgument<
    Validators extends Validator[]
> =
    ValueInterface<ListArgument<Validators>> &
    ValidatorsContainer<Validators>;

export function MapParameter<
    Validators extends Validator[]
>(
    {
        value,
        validators,
    } : MapArgument<Validators>
) : ListReturn<Validators> {

    return MapParameters(value, validators);
}


namespace Map {
    export const Parameters = MapParameters;
    export const Parameter = MapParameter;
    export type Argument<Validators extends Validator[]> = MapArgument<Validators>;
}
export default Map;
