import Validatable from '@alirya/validatable/validatable.js';
import IterableAnd from '@alirya/iterable/validatable/boolean/and.js';
import Validatables from '../validatables/validatables.js';

export function AndParameters<
    ValidatableList extends ReadonlyArray<Validatable>
>(
    validatables : ValidatableList,
    defaults : boolean = true
) : boolean {

    return IterableAnd.Parameters(validatables, defaults);
}

export type AndArgument<List extends ReadonlyArray<Validatable>> = Validatables<List> & {defaults ?: boolean};

export function AndParameter<List extends ReadonlyArray<Validatable>>(
    {
        validatables,
        defaults,
    } : AndArgument<List>
) {
    return AndParameters(validatables, defaults);
}


namespace And {
    export const Parameters = AndParameters;
    export const Parameter = AndParameter;
    export type Argument<List extends ReadonlyArray<Validatable>> = AndArgument<List>;
}
export default And;
