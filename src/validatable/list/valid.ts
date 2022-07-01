import Validatable from '@alirya/validatable/validatable';
import {ValidatableParameters} from '@alirya/validatable/ensure/validatable';
import ValidatableValid from '@alirya/validatable/boolean/value';
import MapUnion from '../../unions';

/**
 * filter all valid {@link Validatable}
 */
export default function Valid<
    Object extends Validatable[] = Validatable[]
>(
    list : Object
) : MapUnion<Object> {

    return list
        .map((value)=>ValidatableParameters(value))
        .filter(ValidatableValid);

}

