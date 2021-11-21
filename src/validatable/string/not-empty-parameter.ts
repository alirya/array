import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NotEmptyParameters from "./not-empty-parameters";


export default function NotEmptyParameter({valid, value} : Readonly<Value<unknown[]> & Validatable>) : string {

    return NotEmptyParameters(value, valid)
}
