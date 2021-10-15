import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";
import Union from "../../../union";

export default function ValuePartial<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    value : ValueType,
    validators : Validators,
    stop : boolean = false
) : Union<ListStrict<Validators>> {

    const result : Union<ListStrict<Validators>> = [];

    for(const [property, validator] of validators.entries()) {

        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return  result;
}
