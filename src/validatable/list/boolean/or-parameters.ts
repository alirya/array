import Validatable from "@dikac/t-validatable/validatable";
import IterableOr from "@dikac/t-iterable/validatable/boolean/or-parameters";


export default function OrParameters<
    List extends ReadonlyArray<Validatable>
>(
    validatables : List,
    defaults : boolean = true
) : boolean {

    return IterableOr(validatables, defaults);
}

