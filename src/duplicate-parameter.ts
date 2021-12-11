import Readonly from "./list/readonly";
import Validation from "@dikac/t-boolean/validation/validation";
import DuplicateParameters from "./duplicate-parameters";

/**
 * option version of {@see DuplicateParameters}
 */
export default function DuplicateParameter<Value>(
    {
        list,
        validation
    } : Readonly<Value> & Partial<Validation<[Value, Value]>>
) : Value[] {

    return DuplicateParameters(list, validation);
}
