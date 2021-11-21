import {List} from "ts-toolbelt";

type Unions<Schema extends unknown[]> =
    Schema |
    List.UnionOf<Schema>[];

export default Unions;
