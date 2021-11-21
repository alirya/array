import Equal from "@dikac/t-boolean/equal";
import Validation from "@dikac/t-boolean/validation/validation";
import Readonly from "./list/readonly";
import IntersectionParameter, {IntersectionParameterList, IntersectionParameterValue} from "./intersection-parameter";
import IntersectionParameters from "./intersection-parameters";

namespace Intersection {

    export const Parameters = IntersectionParameters;
    export const Parameter = IntersectionParameter;
    export type ArgumentValue<Type> = IntersectionParameterValue<Type>;
    export type ArgumentList<Type> = IntersectionParameterList<Type>;
}
export default Intersection;
//
// /**
//  * return data which exists in all array
//  *
//  * @param validation
//  * @param list
//  * @constructor
//  */
//
// export function IntersectionObject<Value>({
//     validation, list
// } : Validation<[Value, Value]> & Readonly<ReadonlyArray<Value>>) : Value[] {
//     return IntersectionParameter(validation, ...list)
// }
//
// export function IntersectionParameter<Value>(
//     validation : (target : Value, comparison : Value) => boolean = Equal,
//     ...list : ReadonlyArray<Value>[]
// ) : Value[] {
//
//     switch(list.length) {
//         case 0 : return [];
//         case 1 : return <Value[]>list.shift();
//     }
//
//     let intersection = <Value[]> list.shift();
//
//     for (const array of list) {
//
//         intersection = intersection.filter((value1)=>{
//
//             for (const value2 of array) {
//
//                 if(validation(value1, value2)) {
//
//                     return true;
//                 }
//             }
//
//             return false;
//         })
//     }
//
//     return intersection;
//
// }
