import Validatable from "@alirya/validatable/validatable";
import IterableOr from "@alirya/iterable/validatable/boolean/or-parameters";


export default function OrParameters<
    List extends ReadonlyArray<Validatable>
>(
    validatables : List,
    defaults : boolean = true
) : boolean {

    return IterableOr(validatables, defaults);
}

