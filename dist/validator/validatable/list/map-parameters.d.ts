import ListArgument from "../../subject/list/allow";
import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
export default function MapParameters<Validators extends Validator[]>(values: ListArgument<Validators>, validators: Validators): ListReturn<Validators>;
