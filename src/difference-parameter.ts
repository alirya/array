import List from "./list/list";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import DifferenceParameters from "./difference-parameters";

/**
 * option version of {@see DifferenceParameters}
 */
export default function DifferenceParameter<Type>(
    {
        list,
        value,
        validation,
    } : List<Type> & Value<ReadonlyArray<Type>> & Partial<Validation<[Type, Type]>>
) : Type[] {

    return DifferenceParameters(list, value, validation);
}
