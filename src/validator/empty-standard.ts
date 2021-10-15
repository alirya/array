import Empty from "./empty";
import EmptyMessage from "../validatable/string/empty";
import Validator from "@dikac/t-validator/validator";
import EmptyValidatable from "../validatable/empty";

/**
 * create {@see Empty} with default message
 */
export default function EmptyStandard() : Validator<Array<any>, [], boolean, boolean, EmptyValidatable<string, Array<any>>> {

    return Empty<string>(EmptyMessage)
}
