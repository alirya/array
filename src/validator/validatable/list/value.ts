import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";
import Union from "../../../union";

export default function Value<
    ValueType,
    Validators extends Validator<unknown, ValueType>[]
>(
    value : ValueType,
    validators : Validators,
) : ListReturn<Validators> {

    const result : ListReturn<Validators> | Union<ListStrict<Validators>> = <Union<ListStrict<Validators>>>[];

    for(const [property, validator] of validators.entries()) {

        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

    }

    return <ListReturn<Validators>> result;
}
