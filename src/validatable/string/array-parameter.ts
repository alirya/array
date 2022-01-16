import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import ArrayParameters from "./array-parameters";

export default function ArrayParameter({valid, value} : Readonly<Validatable & Value>) : string {

    return ArrayParameters(value, valid);
}
