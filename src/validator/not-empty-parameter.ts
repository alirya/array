import Validator from '@alirya/validator/validator';
import {NotEmptyType} from '../validatable/not-empty-parameters';
import NotEmptyMessage from '../validatable/string/not-empty-parameter';
import MessageCallback from '@alirya/validator/message/function/validatable-parameter';
import NotEmptyParameters from './not-empty-parameters';

export default function NotEmptyParameter () : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, string>>;

export default function NotEmptyParameter<MessageType> (
    message : MessageCallback<ReadonlyArray<any>, MessageType>
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType>>;

export default function NotEmptyParameter<MessageType> (
    message : MessageCallback<ReadonlyArray<any>, MessageType|string> = NotEmptyMessage
) : Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyType<Array<any>, MessageType|string>> {

    return NotEmptyParameters(
        (value, valid) => message({value, valid})
    );
}

