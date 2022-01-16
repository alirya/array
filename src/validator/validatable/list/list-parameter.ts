import Validator from '@alirya/validator/validator';
import Map from '../../../map';
import {List as ListHelper} from 'ts-toolbelt';
import InferReturn from '@alirya/validator/validatable/infer-static';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';
import ListParameters from './lisparameters';


export type ListArgument<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
> =
    Value<ValueType> &
    ValidatorContainer<ValidatorType>;

export default function ListParameter<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    {
        value,
        validator,
    } : ListArgument<ValueType, ValidatorType>
) : Map<ValueType, InferReturn<ValidatorType>> {

    return ListParameters(value, validator);
}
