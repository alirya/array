import Value from '@alirya/value/value';
import ShuffleParameters from './shuffle-parameters';

/**
 *
 * object argument version of {@link ShuffleParameters}
 *
 * @param value
 * @param random
 * @constructor
 */
export default function ShuffleParameter<Type>(
    {
        value,
        random,
    } : Value<Type[]> & {random ?: ()=>boolean}
) : Type[] {

    return ShuffleParameters(value, random);
}
