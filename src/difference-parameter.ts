import List from "./array/list";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import DifferenceParameters from "./difference-parameters";
import Compare from "@dikac/t-boolean/compare/compare";
import Equal from "@dikac/t-boolean/equal-parameter";

/**
 * option version of {@see DifferenceParameters}
 */
export default function DifferenceParameter<Type>(
    {
        array,
        compare,
        validation = Equal,
    } : List<Type> & Partial<Validation<[Value<Type> & Compare<Type>]>> & Compare<ReadonlyArray<Type>>
) : Type[] {

    return DifferenceParameters(array, compare,     (value, compare) => validation({value, compare}));
}
