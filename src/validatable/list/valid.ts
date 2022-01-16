import Validatable from '@alirya/validatable/validatable';
import EnsureValidatable from '@alirya/validatable/ensure/validatable-parameters';
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
        .map((value)=>EnsureValidatable(value))
        .filter(ValidatableValid);

}

