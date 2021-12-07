import Validatable from "@dikac/t-validatable/validatable";
import EnsureValidatable from "@dikac/t-validatable/ensure/validatable-parameters";
import ValidatableValid from "@dikac/t-validatable/boolean/value";
import MapUnion from "../../map-union";

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

