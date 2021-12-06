import NotEmptyArgument from "../boolean/not-empty";
import {List} from "ts-toolbelt";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export type NotEmptyType<
    Values extends unknown[],
    MessageType,
> =
    Readonly<Instance<Values, MessageType>> &
    Iterable<List.UnionOf<Values>>;

export default class NotEmptyParameters<
    Values extends unknown[],
    MessageType,
> implements
    NotEmptyType<Values, MessageType>
{
    readonly valid : boolean;
    #message : Dynamic.Parameters<Values, MessageType>

    constructor(
        readonly value : Values,
        message : Dynamic.Parameters<Values, MessageType>,
    ) {

        this.#message = message;
        this.valid = NotEmptyArgument(value);
    }

    * [Symbol.iterator](): Iterator<List.UnionOf<Values>> {

        yield * this.value;
    }

    get message() : MessageType {

        return this.#message(this.value, this.valid);
    }
}


