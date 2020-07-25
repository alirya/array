import Validatable from "@dikac/t-validatable/validatable";
import Filter from "../../list/filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import {List} from "ts-toolbelt";

/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<
    Object extends List.Partial<Validatable[]> = List.Partial<Validatable[]>
>(
    list : Object
) : List.Partial<Object> {

    return Filter(list, (v ) => GuardValidatable(v) && !v.valid);
}
