import ListArgument from "../../base/list/infer";
import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";
import Unions from "../../../unions";

export default function MapPartialParameters<
    Validators extends Validator[]
>(
    values : ListArgument<Validators>,
    validators : Validators,
    stop : boolean = false
) : Unions<ListStrict<Validators>> {

    const result : ListReturn<Validators>|Unions<ListStrict<Validators>> = [];

    for(let [property, validator] of validators.entries()) {

        const value = values[property];
        const validatable = validator(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return  result;
}
