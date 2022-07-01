import ListArgument from '../../subject/list/allow';
import ListReturn from './infer';
import Validator from '@alirya/validator/validator';
import {List} from 'ts-toolbelt';
import ListStrict from './infer';
import Unions from '../../../unions';
import ValidatorsContainer from '../../validators/validators';
import ValueInterface from '@alirya/value/value';


export function MapParameters<
    Validators extends Validator[]
>(
    values : ListArgument<Validators>,
    validators : Validators
) : ListReturn<Validators>  {

    const result : ListReturn<Validators>|Unions<ListStrict<Validators>> = <Unions<ListStrict<Validators>>>[];

    for(let [property, validator] of validators.entries()) {

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
