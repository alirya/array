import {List, Union} from "ts-toolbelt";

/**
 * intersect all {@template Types} to one type
 *
 *
 * example :
 * Merge<[{ a:string }, {b:number}]> = {
 *  a : 'a',
 *  b : 1,
 * };
 *
 */
type MergeTypes<Types extends unknown[]> = Union.IntersectOf<List.UnionOf<Types>>

export default MergeTypes;
