import Equal from "@dikac/t-boolean/equal";
import Validation from "@dikac/t-boolean/validation/validation";
import Readonly from "../list/readonly";
import IndexParameters from "./index-parameters";

/**
 * option version of {@see IndexParameters}
 */
export default function IndexParameter<Value = unknown>(
    {
        list,
        validation,
        start = 0,
        end  = Infinity,
    } : Readonly<Value> & Validation<[Value]> & Partial<{
        start: number
        end: number
    }>
) : number|null {

    return IndexParameters(list, validation, start, end);
}
