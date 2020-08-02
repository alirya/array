import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Function from "@dikac/t-function/function";
import Construct from "@dikac/t-validator/return/return";
export default class NotEmpty<MessageT> implements Validator<Array<any>, Array<any>, NotEmptyValidatable<MessageT, Array<any>>>, Message<Function<[Readonly<Value<Array<any>>> & Readonly<Validatable>], MessageT>> {
    message: Function<[Readonly<Value<Array<any>>> & Readonly<Validatable>], MessageT>;
    constructor(message: Function<[Readonly<Value<Array<any>>> & Readonly<Validatable>], MessageT>);
    validate<Argument extends Array<any>>(value: Argument): Construct<Array<any>, Argument, Array<any>, NotEmptyValidatable<MessageT, Array<any>>>;
}
