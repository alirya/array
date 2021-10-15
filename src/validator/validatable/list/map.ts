import ListArgument from "../../base/list/infer";
import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";
import Union from "../../../union";

export default function Map<
    Validators extends Validator[]
>(
    values : ListArgument<Validators>,
    validators : Validators
) : ListReturn<Validators>  {

    const result : ListReturn<Validators>|Union<ListStrict<Validators>> = <Union<ListStrict<Validators>>>[];

    for(let [property, validator] of validators.entries()) {

        const value = values[property];
        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;
    }

    return <ListReturn<Validators>> result;
}
