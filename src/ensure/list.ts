import ListParameters from "./list-parameters";
import ListParameter, {ListArgument} from "./list-parameter";

/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */

namespace List {

    export const Parameter = ListParameter;
    export const Parameters = ListParameters;
    export type Argument<
        Value extends Argument,
        Argument extends unknown
    > = ListArgument<Value, Argument>;
}
export default List;
//
//
// export function ListParameter<
//     Value extends Argument,
//     Argument extends unknown,
// >(
//     list : ReadonlyArray<Argument>,
//     validation : (value:Argument)=>value is Value,
//     error : (value:unknown)=>Error
// ) : ReadonlyArray<Value>
//
// export function ListParameter<
//     Value extends Argument,
//     Argument extends unknown,
// >(
//     list : Argument[],
//     validation : (value:Argument)=>value is Value,
//     error : (value:unknown)=>Error
// ) : Value[];
//
// export function ListParameter<
//     Value extends Argument,
//     Argument extends unknown,
// >(
//     list : Argument[],
//     validation : (value:Argument)=>value is Value,
//     error : (value:unknown)=>Error
// ) : Value[] {
//
//     AssertList.Parameter(list, validation, error);
//
//     return list;
// }
//
// export type ListArgument<
//     Value extends Argument,
//     Argument extends unknown,
// > = Guard<Argument, Value> &
//     {error : (value:unknown)=>Error}
//
// export function ListObject<
//     Value extends Argument,
//     Argument extends unknown,
// >(
//     list : ReadonlyArray<Argument>,
//     //validation : (value:Argument)=>value is Value,
//     //error : (value:unknown)=>Error,
//     {validation, error} : ListArgument<Value, Argument>
// ) : ReadonlyArray<Value>
//
// export function ListObject<
//     Value extends Argument,
//     Argument extends unknown,
// >(
//     list : Argument[],
//     //validation : (value:Argument)=>value is Value,
//     //error : (value:unknown)=>Error,
//     {validation, error} : ListArgument<Value, Argument>
// ) : Value[] ;
//
// export function ListObject<
//     Value extends Argument,
//     Argument extends unknown,
// >(
//     list : Argument[]|ReadonlyArray<Argument>,
//     //validation : (value:Argument)=>value is Value,
//     //error : (value:unknown)=>Error,
//     {validation, error} : ListArgument<Value, Argument>
// ) : Value[]|ReadonlyArray<Argument> {
//
//     return ListParameter(list, validation, error);
// }
