import Equal from "@alirya/boolean/equal";


/**
 * return data which exists in all array
 *
 * @param validation
 * @param list
 */

export default function IntersectionParameters<Value>(
    list : ReadonlyArray<ReadonlyArray<Value>>,
    validation : (target : Value, comparison : Value) => boolean = Equal,
) : Value[] {

    const val = list.slice(0)

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
