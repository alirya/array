import { List } from "ts-toolbelt";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable";
export declare type NotEmptyType<Values extends unknown[], MessageType> = Readonly<Instance<Values, MessageType>> & Iterable<List.UnionOf<Values>>;
export default class NotEmptyParameters<Values extends unknown[], MessageType> implements NotEmptyType<Values, MessageType> {
    #private;
    readonly value: Values;
    readonly valid: boolean;
    constructor(value: Values, message: Dynamic.Parameters<Values, MessageType>);
    [Symbol.iterator](): Iterator<List.UnionOf<Values>>;
    get message(): MessageType;
}
