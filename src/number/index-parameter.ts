import Validation from "@alirya/boolean/validation/validation";
import Readonly from "../array/readonly";
import IndexParameters from "./index-parameters";

/**
 * option version of {@see IndexParameters}
 */
export default function IndexParameter<Value = unknown>(
    {
        array,
        validation,
        start = 0,
        end  = Infinity,
    } : Readonly<Value> & Validation<[Value]> & Partial<{
        start: number
        end: number
    }>
) : number|null {

    return IndexParameters(array, validation, start, end);
}
