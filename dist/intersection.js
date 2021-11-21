import IntersectionParameter from "./intersection-parameter";
import IntersectionParameters from "./intersection-parameters";
var Intersection;
(function (Intersection) {
    Intersection.Parameters = IntersectionParameters;
    Intersection.Parameter = IntersectionParameter;
})(Intersection || (Intersection = {}));
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
//# sourceMappingURL=intersection.js.map