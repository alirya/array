import Validatable from "@dikac/t-validatable/validatable";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";

export default function AndParameters<
    ValidatableList extends ReadonlyArray<Validatable>
>(
    validatables : ValidatableList,
    defaults : boolean = true
) : boolean {

    return IterableAnd(validatables, defaults);
}
