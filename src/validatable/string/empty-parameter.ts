import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import EmptyParameters from "./empty-parameters";


export default function EmptyParameter({valid, value} : Readonly<Value<unknown[]> & Validatable>) : string {

    return EmptyParameters(value, valid)
}
