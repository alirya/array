import NotEmpty from "./empty";
import NotEmptyMessage from "../validatable/string/not-empty";
import Validator from "@dikac/t-validator/validator";
import EmptyValidatable from "../validatable/empty";

export default function NotEmptyStandard() : Validator<Array<any>, [], boolean, boolean, EmptyValidatable<string, Array<any>>> {

    return NotEmpty<string>(NotEmptyMessage)
}
