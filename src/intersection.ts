import {EqualParameters, EqualParameter} from '@alirya/boolean/equal';
import Validation from '@alirya/boolean/validation/validation';
import Readonly from './array/readonly';
import Value from '@alirya/value/value';
import Compare from '@alirya/boolean/compare/compare';


/**
 * return data which exists in all array
 *
 * @param validation
 * @param list
 */

export function IntersectionParameters<Value>(
    list : ReadonlyArray<ReadonlyArray<Value>>,
    validation : (target : Value, comparison : Value) => boolean = EqualParameters,
) : Value[] {

    const val = list.slice(0);

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
        });
    }

    return intersection;

}


/**
 * return data which exists in all array
 *
 * @param validation
 * @param list
 * @constructor
 */
export function IntersectionParameter<Type>({
    validation = EqualParameter,
    array,
} : Partial<Validation<[Value<Type> & Compare<Type>]>> & Readonly<ReadonlyArray<Type>>) : Type[] {

    return IntersectionParameters(
        array,
        (value, compare) => validation({value, compare})
    );
}


namespace Intersection {
    export const Parameters = IntersectionParameters;
    export const Parameter = IntersectionParameter;
}
export default Intersection;
