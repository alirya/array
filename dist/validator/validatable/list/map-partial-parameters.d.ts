import ListArgument from "../../subject/list/allow";
import Validator from "@dikac/t-validator/validator";
import ListStrict from "./infer";
import Unions from "../../../unions";
export default function MapPartialParameters<Validators extends Validator[]>(values: ListArgument<Validators>, validators: Validators, stop?: boolean): Unions<ListStrict<Validators>>;
