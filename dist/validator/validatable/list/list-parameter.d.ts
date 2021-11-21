import Validator from "@dikac/t-validator/validator";
import Map from "../../../map";
import { List as ListHelper } from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/infer-static";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export declare type ListArgument<ValueType extends unknown[], ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>> = Value<ValueType> & ValidatorContainer<ValidatorType>;
export default function ListParameter<ValueType extends unknown[], ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>>({ value, validator, }: ListArgument<ValueType, ValidatorType>): Map<ValueType, InferReturn<ValidatorType>>;
