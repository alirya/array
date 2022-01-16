import ListArgument from '../../subject/list/allow';
import Validator from '@alirya/validator/validator';
import ListStrict from './infer';
import Unions from '../../../unions';
import Value from '@alirya/value/value';
import ValidatorsContainer from '../../validators/validators';
import MapPartialParameters from './map-partial-parameters';

export type MapPartialArgument<
    Validators extends Validator[]
> =
    Value<ListArgument<Validators>> &
    ValidatorsContainer<Validators> &
    {stop?:boolean};

export default function MapPartialParameter<
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
