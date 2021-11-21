import Equal from "@dikac/t-boolean/equal";


/**
 * return data which exists in all array
 *
 * @param validation
 * @param value
 * @constructor
 */

export default function IntersectionParameters<Value>(
    value : ReadonlyArray<ReadonlyArray<Value>>,
    validation : (target : Value, comparison : Value) => boolean = Equal,
) : Value[] {

    const val = value.slice(0)

    switch(val.length) {
        case 0 : return [];
        case 1 : return <Value[]>val.shift();
    }

    let intersection = <Value[]> val.shift();

    for (const array of val) {

        intersection = intersection.filter((value1)=>{

            for (const value2 of array) {

                if(validation(value1, value2)) {

                    return true;
                }
            }

            return false;
        })
    }

    return intersection;

}
