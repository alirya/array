import Validator from "@dikac/t-validator/validator";
import { NotEmptyType } from "../validatable/not-empty-parameters";
import MessageCallback from "@dikac/t-validator/message/function/validatable-parameters";
export default function NotEmptyParameters(): Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, string>>;
export default function NotEmptyParameters<MessageType>(message: MessageCallback<ReadonlyArray<any>, MessageType>): Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>>;
