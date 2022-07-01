import Validatable from '@alirya/validatable/validatable';
import IterableOr from '@alirya/iterable/validatable/boolean/or';
import Validatables from '../../validatables/validatables';


export function OrParameters<
    List extends ReadonlyArray<Validatable>
>(
    validatables : List,
    defaults : boolean = true
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
