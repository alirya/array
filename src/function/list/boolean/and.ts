import {Union, List} from 'ts-toolbelt';

/**
 * callback boolean mapping
 */
export type Validation<Values extends any[]> = {
    [Key in keyof Values]:  (value : any) => boolean
};

/**
 * callback guard mapping
 */
export type Guard<Values extends any[]> = {
    [Key in keyof Values]:  (value : any) => value is Values[Key]
};

/**
 *
 * @param value
 * @param validations
 */
export default function And<Result extends unknown[]>(
    value : unknown,
    validations : Guard<Result>
) : value is Union.IntersectOf<List.UnionOf<Result>>;

export default function And<Result extends unknown[]>(
    value : unknown,
    validations : Validation<Result>
) : boolean;

export default function And<Result extends unknown[]>(
    value : unknown,
    validations : Validation<Result>
) : boolean {

    for(let validator of validations) {

        if(!validator(value)) {

            return false;
        }
    }

    return true;
}
