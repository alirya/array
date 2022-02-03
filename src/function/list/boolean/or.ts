import {Guard, Validation} from './and';
import {List} from 'ts-toolbelt';


export {Validation, Guard};

/**
 *
 * @param value
 * @param validations
 */
export default function Or<Result extends unknown[]>(
    value : unknown,
    validations : Guard<Result>
) : value is List.UnionOf<Result>;

export default function Or<Result extends unknown[]>(
    value : unknown,
    validations : Validation<Result>
) : boolean;

export default function Or<Result extends unknown[]>(
    value : unknown,
    validators : Validation<Result>
) : value is List.UnionOf<Result> {

    for(let validator of validators) {

        if(validator(value)) {

            return true;
        }
    }

    return false;
}


