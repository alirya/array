import Validatable from '@alirya/validatable/validatable.js';
import IterableOr from '@alirya/iterable/validatable/boolean/or.js';
import Callback from './callback.js';
import ValidatableContainer from './validatables/validatables.js';

export function OrParameters<Validatables extends Validatable[]>(
    validatables : Validatables,
    defaults  = true
) : Callback.Type<Validatables> {

    return new Callback.Parameters(validatables, (v)=>IterableOr.Parameters(v, defaults));
}



export function OrParameter<Validatables extends Validatable[]>(
    {
        validatables,
        defaults,
    } : ValidatableContainer<Validatables> & {defaults : boolean}
) : Callback.Type<Validatables> {

    return OrParameters(validatables, defaults);
}



namespace Or {
    export const Parameters = OrParameters;
    export const Parameter = OrParameter;
}
export default Or;
