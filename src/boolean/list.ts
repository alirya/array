/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 */

export default function List<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[],
    validation : (value:Argument)=>value is Value,
) : list is Value[]

export default function List<
    Assumption extends [],
>(
    list : unknown[],
    validation : (value:unknown)=>boolean,
) : boolean;

export default function List<
    Assumption extends [],
    >(
    list : unknown[],
    validation : (value:unknown)=>boolean,
) : boolean {

    for(let value of list) {

        if(validation(value)) {

           continue;
        }

        return false;
    }

    return true;
}
