import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ArrayParameters from "./array-parameters";

export default function ArrayParameter({valid, value} : Readonly<Validatable & Value>) : string {

    return ArrayParameters(value, valid);
}
