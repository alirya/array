import Message from '@alirya/message/message.js';
import ListInfer from './infer.js';
import MapUnion from '../../../unions.js';
import Validatable from '@alirya/validatable/validatable.js';
import FilterInvalid from '../../../validatable/list/invalid.js';
import Map from './map.js';

export default function Invalid<
    Messages extends (Message & Validatable)[]
>(
    list : Messages,
) : MapUnion<ListInfer<Messages>> {

    return Map(FilterInvalid(list));
}
