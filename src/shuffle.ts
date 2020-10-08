/**
 * randomize {@param array} array position
 * non cryptographic random
 *
 * @return the same as argument {@param array}
 */

export default function Shuffle<Value>(array : Value[]) : Value[] {

    let j, x, i;

    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }

    return array;
}
