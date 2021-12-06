import Message from "@dikac/t-message/message";
import NotEmptyArgument from "../boolean/not-empty";
import ValueInterface from "@dikac/t-value/value";
import NotEmptyParameters from "./not-empty-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable";


export type NotEmptyArgument<
    Values extends unknown[],
    MessageType,
> =
    ValueInterface<Values> &
    Message<Dynamic.Parameter<Values, MessageType>>
;


export default class NotEmptyParameter<Values extends unknown[], MessageType> extends NotEmptyParameters<Values, MessageType> {

    constructor({value, message} : NotEmptyArgument<Values, MessageType>) {
        super(value, (value, valid) => message({value, valid}));
    }
}


