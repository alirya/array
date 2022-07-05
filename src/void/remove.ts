import Validation from '@alirya/boolean/function/validation.js';
import {ExtractParameter, ExtractArgument as RemoveArgument, ExtractParameters} from '../extract.js';


export function RemoveParameters<Value>(
    list : Value[],
    validation : Validation<[Value]>,
    start : number = 0,
    end : number = Infinity,
    limit : number = Infinity
) : void {

    ExtractParameters(list, validation, start, end, limit);
}


export {RemoveArgument};

export function RemoveParameter<Value>(argument : RemoveArgument<Value>) : void{

    ExtractParameter(argument);
}




namespace Remove {
    export const Parameters = RemoveParameters;
    export const Parameter = RemoveParameter;
}
export default Remove;
