import Validatable from '@alirya/validatable/validatable.js';
import {ValidatableParameters} from '@alirya/validatable/ensure/validatable.js';
import ValidatableInValid from '@alirya/validatable/boolean/invalid.js';
import MapUnion from '../../unions.js';

/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<
    Object extends Validatable[] = Validatable[]
>(
    list : Object
) : MapUnion<Object> {

    return  list
        .map((value)=>ValidatableParameters(value))
        .filter(ValidatableInValid);
}
