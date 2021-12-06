import Validator from "@dikac/t-validator/validator";
import { NotEmptyType } from "../validatable/not-empty-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable";
export default function NotEmptyParameter(): Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, string>>;
export default function NotEmptyParameter<MessageType>(message: Dynamic.Parameter<ReadonlyArray<any>, MessageType>): Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>>;
