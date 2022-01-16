import Validation from '@alirya/boolean/validation/validation';
import Readonly from './array/readonly';
import IntersectionParameters from './intersection-parameters';
import Value from '@alirya/value/value';
import Equal from '@alirya/boolean/equal-parameter';
import Compare from '@alirya/boolean/compare/compare';

/**
 * return data which exists in all array
 *
 * @param validation
 * @param list
 * @constructor
 */
export default function IntersectionParameter<Type>({
    validation = Equal,
    array,
} : Partial<Validation<[Value<Type> & Compare<Type>]>> & Readonly<ReadonlyArray<Type>>) : Type[] {

    return IntersectionParameters(
        array,
        (value, compare) => validation({value, compare})
    );
}
