import {List, Union} from "ts-toolbelt";

/**
 * intersect all {@template Types} tp one type
 */
type Merge<Types extends unknown[]> = Union.IntersectOf<List.UnionOf<Types>>

export default Merge;



