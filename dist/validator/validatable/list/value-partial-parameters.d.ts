import Validator from "@dikac/t-validator/validator";
import ListStrict from "./infer";
import Unions from "../../../unions";
export default function ValuePartialParameters<ValueType, Validators extends Validator<unknown, ValueType>[]>(value: ValueType, validators: Validators, stop?: boolean): Unions<ListStrict<Validators>>;
