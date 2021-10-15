import Validator from "@dikac/t-validator/validator";
import EmptyValidatable from "../validatable/empty";
export default function NotEmptyStandard(): Validator<Array<any>, [], boolean, boolean, EmptyValidatable<string, Array<any>>>;
