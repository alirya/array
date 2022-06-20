import EqualBoolean from '@alirya/boolean/equal';

export default function EqualParameters<Value>(
    array1 : ReadonlyArray<Value>,
    array2 : ReadonlyArray<Value>,
    compare : (value1:Value, value2:Value) => boolean = EqualBoolean
) : boolean {

    if(array1.length !== array2.length) {

        return false;
    }

    for(const [index, value] of array1.entries()) {

        if(!compare(value, array2[index])) {

            return false;
        }
    }

    return true;
}
