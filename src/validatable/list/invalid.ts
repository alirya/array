import Validatable from "@dikac/t-validatable/validatable";
import EnsureValidatable from "@dikac/t-validatable/ensure/validatable";
import ValidatableInValid from "@dikac/t-validatable/boolean/invalid";
import MapUnion from "../../map-union";

/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<
    Object extends Validatable[] = Validatable[]
>(
    list : Object
) : MapUnion<Object> {

    return  list
        .map((value)=>EnsureValidatable.Parameter(value))
        .filter(ValidatableInValid);
}
