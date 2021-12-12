import Validation from "@dikac/t-boolean/validation/validation";
import Readonly from "./list/readonly";
import IntersectionParameters from "./intersection-parameters";
import Value from "@dikac/t-value/value";
import Equal from "@dikac/t-boolean/equal-parameter";
import Compare from "@dikac/t-boolean/compare/compare";

/**
 * return data which exists in all array
 *
 * @param validation
 * @param list
 * @constructor
 */
export default function IntersectionParameter<Type>({
    validation = Equal,
    list,
} : Partial<Validation<[Value<Type> & Compare<Type>]>> & Readonly<ReadonlyArray<Type>>) : Type[] {

    return IntersectionParameters(
        list,
        (value, compare) => validation({value, compare})
    );
}
