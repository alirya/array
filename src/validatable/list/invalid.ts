import Validatable from '@alirya/validatable/validatable';
import {ValidatableParameters} from '@alirya/validatable/ensure/validatable';
import ValidatableInValid from '@alirya/validatable/boolean/invalid';
import MapUnion from '../../unions';

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
