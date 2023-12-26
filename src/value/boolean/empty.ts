import Value from '@axiona/value/value.js';
import EmptyArgument from '../../boolean/empty.js';

/**
 * @deprecated
 */
export default function Empty(
    object : Value<undefined[]>,
) : boolean {

    return EmptyArgument(object.value);
}
