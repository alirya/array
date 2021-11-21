import Extract from "./value/value/extract";
import Index from "./number";
import Equal from "@dikac/t-boolean/equal";
import ValueInterface from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import List from "./list/list";
import RemovesValueParameter, {RemovesValueArgument} from "./removes-value-parameter";
import RemovesValueParameters from "./removes-value-parameters";

namespace RemovesValue {

    export const Parameters = RemovesValueParameters;
    export const Parameter = RemovesValueParameter;
    export type Argument<Value> = RemovesValueArgument<Value>;
}

export default RemovesValue;
//
// export type RemovesValueArgument<Value> =
//     ValueInterface<Value> &
//     List<Value> &
//     Partial<Validation<[Value, Value]>> &
//     {
//         start ?: number,
//         end ?: number,
//         limit ?: number
//     };
//
// export function RemovesValueObject<Value>({
//     list,
//     value,
//     validation,
//     start,
//     end,
//     limit
// } : RemovesValueArgument<Value>) : Value[] {
//
//     return RemovesValueParameter(list, value, validation, start, end, limit);
// }
//
// export function RemovesValueParameter<Value>(
//     list : Value[],
//     value ?: Value,
//     validation : RemovesValueArgument<Value>['validation'] = Equal,
//     start : number = 0,
//     end : number = Infinity,
//     limit : number = Infinity
// ) : Value[] {
//
//     let removed : Value[]  = [];
//
//     while (limit > 0) {
//
//         let index = Index(list as Value[], value, validation, start, end);
//
//         if(index !== null) {
//
//             let value = Extract<Value>(list as Value[], index);
//
//             if(value === undefined) {
//
//                 // TODO ADD ERROR
//                 throw new Error('TODO');
//             }
//
//             removed.push(value);
//             limit--;
//
//         } else {
//
//             break;
//         }
//     }
//
//     return  removed;
// }
//
//

