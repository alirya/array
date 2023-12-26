import Message from '@axiona/message/message.js';
import {List} from 'ts-toolbelt';
import ListStrict from './infer.js';

type PartialUnion<Schema extends Message[]> =
    ListStrict<Schema> |
    List.UnionOf<ListStrict<Schema>>[];

export default PartialUnion;
