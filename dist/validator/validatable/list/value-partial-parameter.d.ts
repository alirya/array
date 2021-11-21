import Validator from "@dikac/t-validator/validator";
import ListStrict from "./infer";
import Unions from "../../../unions";
import Value from "@dikac/t-value/value";
import ValidatorsContainer from "../../validators/validators";
export declare type ValuePartialArgument<ValueType, Validators extends Validator<unknown, ValueType>[]> = Value<ValueType> & ValidatorsContainer<Validators> & {
    stop?: boolean;
};
export default function ValuePartialParameter<ValueType, Validators extends Validator<unknown, ValueType>[]>({ value, validators, stop }: ValuePartialArgument<ValueType, Validators>): Unions<ListStrict<Validators>>;
