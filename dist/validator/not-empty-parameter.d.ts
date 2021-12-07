import Validator from "@dikac/t-validator/validator";
import { NotEmptyType } from "../validatable/not-empty-parameters";
import MessageCallback from "@dikac/t-validator/message/function/validatable-parameter";
export default function NotEmptyParameter(): Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, string>>;
export default function NotEmptyParameter<MessageType>(message: MessageCallback<ReadonlyArray<any>, MessageType>): Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>>;
