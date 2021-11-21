import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import ValidatorsContainer from "../../validators/validators";
export declare type ValueArgument<ValueType, Validators extends Validator<unknown, ValueType>[]> = Value<ValueType> & ValidatorsContainer<Validators>;
export default function ValueParameter<ValueType, Validators extends Validator<unknown, ValueType>[]>({ value, validators, }: ValueArgument<ValueType, Validators>): ListReturn<Validators>;
