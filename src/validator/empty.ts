import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Function from "@dikac/t-function/function";

export default class Empty<Msg, Val extends unknown[]>
    implements
        Validator<Val, Readonly<Validatable<boolean> & Message<Msg> & Value<Val>>>,
        Message<Function<[Readonly<Value<Val>> & Readonly<Validatable>], Msg>>
{

    constructor(
        public empty : boolean,
        public message : Function<[Readonly<Value<Val>> & Readonly<Validatable>], Msg>
    ) {
    }

    validate(value: Val): Readonly<Validatable<boolean> & Message<Msg> & Value<Val>> {

        return new EmptyValidatable(value, this.message);
    }
}
