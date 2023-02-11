import Validatable from '@alirya/validatable/validatable.js';
import {ValidatableParameters} from '@alirya/validatable/ensure/validatable.js';
import ValidatableValid from '@alirya/validatable/boolean/value.js';
import MapUnion from '../../unions.js';

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

