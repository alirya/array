import Validatable from '@alirya/validatable/validatable';
import Validatables from '../../validatables/validatables';
import OrParameters from './or-parameters';


export default function OrParameter<List extends ReadonlyArray<Validatable>>(
    {
        validatables,
        defaults,
    } : Validatables<List> & {defaults ?: boolean}
) {
    return OrParameters(validatables, defaults);
}
