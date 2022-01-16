import RandomBoolean from '@alirya/boolean/random';

/**
 * pick a random values
 *
 * @param value
 * @param random
 */
export default function RandomParameters<Value>(
    value : ReadonlyArray<Value>,
    random : ()=> boolean = RandomBoolean
) : Value[] {

    let gets : Value[]= [];

    for (let data of value) {

        if (random()) {

            gets.push(data);

        }
    }

    return gets;
}
