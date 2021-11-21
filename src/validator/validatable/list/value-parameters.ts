import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";
import Unions from "../../../unions";


export default function ValueParameters<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    value : ValueType,
    validators : Validators,
) : ListReturn<Validators> {

    const result : ListReturn<Validators> | Unions<ListStrict<Validators>> = <Unions<ListStrict<Validators>>>[];

    for(const [property, validator] of validators.entries()) {

        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

    }

    return <ListReturn<Validators>> result;
}

