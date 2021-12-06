import Validatable from "@dikac/t-validatable/validatable";
import IterableOr from "@dikac/t-iterable/validatable/boolean/or-parameters";
import Callback from "./callback-parameters";

export default function OrParameters<Validatables extends Validatable[]>(
    validatables : Validatables,
    defaults : boolean = true
) : Callback<Validatables> {

    return new Callback(validatables, (v)=>IterableOr(v, defaults));
}

