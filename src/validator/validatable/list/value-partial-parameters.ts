import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";
import Unions from "../../../unions";

export default function ValuePartialParameters<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    value : ValueType,
    validators : Validators,
    stop : boolean = false
) : Unions<ListStrict<Validators>> {

    const result : Unions<ListStrict<Validators>> = [];

    for(const [property, validator] of validators.entries()) {

        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return  result;
}
