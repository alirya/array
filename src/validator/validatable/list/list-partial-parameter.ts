import Validator from '@alirya/validator/validator';
import Unions from '../../../unions';
import Map from '../../../map';
import {List as ListHelper} from 'ts-toolbelt';
import InferReturn from '@alirya/validator/validatable/infer-static';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';
import ListPartialParameters from './list-partial-parameters';



export type ListPartialArgument<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
> =
    Value<ValueType> &
    ValidatorContainer<ValidatorType> &
    {stop?:boolean};

export default function ListPartialParameter<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    {
        value,
        validator,
        stop
    } : ListPartialArgument<ValueType, ValidatorType>
) : Unions<Map<ValueType, InferReturn<ValidatorType>>> {

    return ListPartialParameters(value, validator, stop);
}
