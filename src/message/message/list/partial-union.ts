import Message from '@alirya/message/message';
import {List} from 'ts-toolbelt';
import ListStrict from './infer';

type PartialUnion<Schema extends Message[]> =
    ListStrict<Schema> |
    List.UnionOf<ListStrict<Schema>>[];

export default PartialUnion;
