import Validatable from '@alirya/validatable/validatable';
import IterableAnd from '@alirya/iterable/validatable/boolean/and-parameters';
import Callback from './callback-parameters';


export default function AndParameters<List extends ReadonlyArray<Validatable>>(
    validatables : List,
    defaults : boolean = true
) : Callback<List> {

    return new Callback(validatables, (v)=>IterableAnd(v, defaults));
}


