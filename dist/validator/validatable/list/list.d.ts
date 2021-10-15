import Validator from "@dikac/t-validator/validator";
import Map from "../../../map";
import { List as ListHelper } from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";
export default function List<ValueType extends unknown[], ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>>(values: ValueType, validator: ValidatorType): Map<ValueType, InferReturn<ValidatorType>>;
