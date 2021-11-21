import Validatable from "@dikac/t-validatable/validatable";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";
import Callback from "./callback-parameters";
import Validatables from "./validatables/validatables";
import {List as Li} from "ts-toolbelt";


export default function AndParameters<List extends Validatable[]>(
    validatables : List,
    defaults : boolean = true
) : Callback<List> {

    return new Callback(validatables, (v)=>IterableAnd(v, defaults));
}


