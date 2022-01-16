import Validation from "@alirya/boolean/function/validation";
import ExtractParameters from "../extracparameters";


export default function RemoveParameters<Value>(
    list : Value[],
    validation : Validation<[Value]>,
    start : number = 0,
    end : number = Infinity,
    limit : number = Infinity
) : void {

    ExtractParameters(list, validation, start, end, limit);
}


