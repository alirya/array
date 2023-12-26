import Validatable from '@axiona/validatable/validatable.js';
import IterableAnd from '@axiona/iterable/validatable/boolean/and.js';
import Callback from './callback.js';
import {CallbackType} from './callback.js';
import Validatables from './validatables/validatables.js';


export function AndParameters<List extends ReadonlyArray<Validatable>>(
    validatables : List,
    defaults  = true
) : Callback.Type<List> {

    return new Callback.Parameters(validatables, (v)=>IterableAnd.Parameters(v, defaults));
}




export type ArrayArgument<List extends Validatable[]> =
    Validatables<List> &
    {defaults:boolean};

export function AndParameter<List extends Validatable[]>(
    {
        validatables,
        defaults,
    } : ArrayArgument<List>
) : Callback.Type<List> {

    return AndParameters(validatables, defaults);
}

export type ArrayReturn<List extends Validatable[]> = CallbackType<List>;


namespace And {
    export const Parameters = AndParameters;
    export const Parameter = AndParameter;
    export type Argument<List extends Validatable[]> = ArrayArgument<List>;
    export type Return<List extends Validatable[]> = ArrayReturn<List>;
}
export default And;
