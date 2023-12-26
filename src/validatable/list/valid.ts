import Validatable from '@axiona/validatable/validatable.js';
import {ValidatableParameters} from '@axiona/validatable/ensure/validatable.js';
import ValidatableValid from '@axiona/validatable/boolean/value.js';
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

