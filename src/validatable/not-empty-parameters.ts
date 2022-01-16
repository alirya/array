import NotEmptyArgument from "../boolean/not-empty";
import {List} from "ts-toolbelt";
import Instance from "@alirya/validator/validatable/validatable";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";

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
    #message : Dynamic<Values, MessageType>

    constructor(
        readonly value : Values,
        message : Dynamic<Values, MessageType>,
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


