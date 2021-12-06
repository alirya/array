import Validatable from "@dikac/t-validatable/validatable";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and-parameters";


export default function AndParameters<
    List extends ReadonlyArray<Validatable>
    >(
    validatables : List,
    defaults : boolean = true
) : boolean {

    return IterableAnd(validatables, defaults);
}
