import Validatable from '@alirya/validatable/validatable';
import EnsureValidatable from '@alirya/validatable/ensure/validatable-parameters';
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
        .map((value)=>EnsureValidatable(value))
        .filter(ValidatableInValid);
}
