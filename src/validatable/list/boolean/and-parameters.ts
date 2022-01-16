import Validatable from "@alirya/validatable/validatable";
import IterableAnd from "@alirya/iterable/validatable/boolean/and-parameters";


export default function AndParameters<
    List extends ReadonlyArray<Validatable>
    >(
    validatables : List,
    defaults : boolean = true
) : boolean {

    return IterableAnd(validatables, defaults);
}
