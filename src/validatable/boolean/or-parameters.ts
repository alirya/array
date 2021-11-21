import Validatable from "@dikac/t-validatable/validatable";
import IterableOr from "@dikac/t-iterable/validatable/boolean/or";


export default function OrParameters<
    ValidatableList extends ReadonlyArray<Validatable>
>(
    validatables : ValidatableList,
    defaults : boolean = true
) : boolean {

    return IterableOr(validatables, defaults);
}

