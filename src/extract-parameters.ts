import IndexParameters from "./number/index-parameters";
import Validation from "@alirya/boolean/function/validation";
import Reset from "./void/reset";

export default function ExtractParameters<Value>(
    list : Value[],
    validation : Validation<[Value]>,
    start : number = 0,
    end : number = Infinity,
    limit : number = Infinity
) : Value[] {

    let extracted : Value[]  = [];

    let index : number|null = 0;

    while (limit) {

        index = IndexParameters(list as Value[], validation, start + index, end);

        if(index === null) {

            break;
        }

        extracted.push(list[index]);

        delete list[index];

        limi-;
    }

    Reset(list);

    return extracted;
}
