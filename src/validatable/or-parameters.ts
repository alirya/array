import Validatable from "@alirya/validatable/validatable";
import IterableOr from "@alirya/iterable/validatable/boolean/or-parameters";
import Callback from "./callback-parameters";

export default function OrParameters<Validatables extends Validatable[]>(
    validatables : Validatables,
    defaults : boolean = true
) : Callback<Validatables> {

    return new Callback(validatables, (v)=>IterableOr(v, defaults));
}

