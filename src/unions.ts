import {List} from 'ts-toolbelt';
/**
 * unionizes array types to another array
 */
type Unions<Schema extends unknown[]> =
    Schema |
    List.UnionOf<Schema>[];

export default Unions;
