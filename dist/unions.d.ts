import { List } from "ts-toolbelt";
declare type Unions<Schema extends unknown[]> = Schema | List.UnionOf<Schema>[];
export default Unions;
