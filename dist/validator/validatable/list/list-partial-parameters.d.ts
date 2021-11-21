import Validator from "@dikac/t-validator/validator";
import Unions from "../../../unions";
import Map from "../../../map";
import { List as ListHelper } from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/infer-static";
export default function ListPartialParameters<ValueType extends unknown[], ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>>(values: ValueType, validator: ValidatorType, stop?: boolean): Unions<Map<ValueType, InferReturn<ValidatorType>>>;
