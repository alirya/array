/**
 * get the first non 'undefined' value
 *
 * @param values
 */
export default function First <Value>(values : ReadonlyArray<Value>) : Value|undefined {

    const first = values[0];

    if(first === undefined) {

        for(const value of values) {

            if(value !== undefined) {

                return value;
            }
        }
    }

    return first;
}
