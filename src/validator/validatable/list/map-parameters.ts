import ListArgument from '../../subject/list/allow';
import ListReturn from './infer';
import Validator from '@alirya/validator/validator';
import {List} from 'ts-toolbelt';
import ListStrict from './infer';
import Unions from '../../../unions';


export default function MapParameters<
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
