import EqualBoolean from "@dikac/t-boolean/equal";

export default function EqualParameters<Value>(
    array1 : ReadonlyArray<Value>,
    array2 : ReadonlyArray<Value>,
    compare : (value1:Value, value2:Value) => boolean = EqualBoolean
) : boolean {

    if(array1.length !== array2.length) {

        return false;
    }

    let valids : (number|string)[] = [];

    PARENT : for(let i in array1) {

        for(let j in array2) {

            if(valids.includes(j)) {

                continue ;
            }

            if(compare(array1[i], array2[j])) {

                valids.push(j);

                continue PARENT;
            }
        }

        return false;
    }

    if(array1.length === valids.length) {

        return true;
    }

    return false;
}
