import Readonly from "./array/readonly";
import Validation from "@alirya/boolean/validation/validation";
import DuplicateParameters from "./duplicate-parameters";
import Value from "@alirya/value/value";
import Compare from "@alirya/boolean/compare/compare";
import Equal from "@alirya/boolean/equal-parameter";

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
