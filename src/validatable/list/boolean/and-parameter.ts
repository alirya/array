import Validatable from '@alirya/validatable/validatable';
import Validatables from '../../validatables/validatables';
import AndParameters from './and-parameters';


export function AndParameter<List extends ReadonlyArray<Validatable>>(
    {
        validatables,
        defaults,
    } : Validatables<List> & {defaults ?: boolean}
) {
    return AndParameters(validatables, defaults);
}
