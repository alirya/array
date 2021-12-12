import Readonly from "./array/readonly";
import Validation from "@dikac/t-boolean/validation/validation";
import DuplicateParameters from "./duplicate-parameters";
import Value from "@dikac/t-value/value";
import Compare from "@dikac/t-boolean/compare/compare";
import Equal from "@dikac/t-boolean/equal-parameter";

/**
 * option version of {@see DuplicateParameters}
 */

export default function DuplicateParameter<Type>(
    {
        array,
        validation = Equal
    } : Partial<Validation<[Value<Type> & Compare<Type>]>> & Readonly<Type>
) : Type[] {

    return DuplicateParameters(
        array,
        (value, compare) => validation({value, compare})
    );
}
