
export default function OrParameters(
    list : ReadonlyArray<boolean>,
    defaults : boolean = true
) : boolean {

    if(!list.length) {

        return defaults;
    }

    let result : boolean = false;

    for(let boolean of list) {

        result = result || boolean;

        if(boolean) {

            return true;
        }
    }

    return false;
}
