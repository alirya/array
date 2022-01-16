import Equal from '@alirya/boolean/equal';


/**
 * return all data from {@param list} that does not exist in {@param value}
 *
 * @param list
 * @param value
 * @param validation
 */
export default function DifferenceParameters<Type>(
    list: ReadonlyArray<Type>,
    value : ReadonlyArray<Type>,
    validation : (target : Type, comparison : Type) => boolean = Equal
) : Type[] {
    let results : Type[] = [];

    TARGET : for(let target of list) {

        for(let comparison of value) {

            if(validation(target, comparison)) {

                continue TARGET;
            }
        }

        results.push(target);
    }

    return results;
}
