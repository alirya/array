import Validatable from "@alirya/validatable/validatable";
import IterableOr from "@alirya/iterable/validatable/boolean/or-parameters";


export default function OrParameters<
    ValidatableList extends ReadonlyArray<Validatable>
>(
    validatables : ValidatableList,
    defaults : boolean = true
) : boolean {

    return IterableOr(validatables, defaults);
}

