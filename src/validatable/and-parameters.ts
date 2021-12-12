import Validatable from "@dikac/t-validatable/validatable";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and-parameters";
import Callback from "./callback-parameters";


export default function AndParameters<List extends ReadonlyArray<Validatable>>(
    validatables : List,
    defaults : boolean = true
) : Callback<List> {

    return new Callback(validatables, (v)=>IterableAnd(v, defaults));
}


