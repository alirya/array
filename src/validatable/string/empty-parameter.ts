import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import EmptyParameters from "./empty-parameters";


export default function EmptyParameter({valid, value} : Readonly<Value<unknown[]> & Validatable>) : string {

    return EmptyParameters(value, valid)
}
