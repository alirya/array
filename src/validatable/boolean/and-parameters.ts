import Validatable from '@alirya/validatable/validatable';
import IterableAnd from '@alirya/iterable/validatable/boolean/and-parameters';

export default function AndParameters<
    ValidatableList extends ReadonlyArray<Validatable>
>(
    validatables : ValidatableList,
    defaults : boolean = true
) : boolean {

    return IterableAnd(validatables, defaults);
}
