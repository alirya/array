/**
 * get the last non 'undefined' value
 *
 * @param value
 */
export default function Last <Value>(value : ReadonlyArray<Value>) : Value|undefined {

    let last : Value|undefined = value[value.length - 1];

    if(last === undefined) {

        const clone = value.slice(0);

        do {

            last = clone.pop();

        } while (last === undefined && clone.length);

    }

    return last;
}
