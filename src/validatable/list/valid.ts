import Validatable from "@dikac/t-validatable/validatable";
import EnsureValidatable from "@dikac/t-validatable/ensure/validatable";
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

    return  list.map((v)=>EnsureValidatable(v)).filter(ValidatableValid);

}

