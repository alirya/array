import Validatable from '@axiona/validatable/validatable.js';
import IterableOr from '@axiona/iterable/validatable/boolean/or.js';
import Validatables from '../../validatables/validatables.js';


export function OrParameters<
    List extends ReadonlyArray<Validatable>
>(
    validatables : List,
    defaults  = true
) : boolean {

    return IterableOr.Parameters(validatables, defaults);
}

export type OrArgument<List extends ReadonlyArray<Validatable>> = Validatables<List> & {defaults ?: boolean};

export function OrParameter<List extends ReadonlyArray<Validatable>>(
    {
        validatables,
        defaults,
    } : OrArgument<List>
) {
    return OrParameters(validatables, defaults);
}


namespace Or {
    export const Parameters = OrParameters;
    export const Parameter = OrParameter;
    export type Argument<List extends ReadonlyArray<Validatable>> = OrArgument<List>;
}
export default Or;
