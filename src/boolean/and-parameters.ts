
export default function AndParameters(
    booleans : ReadonlyArray<boolean>,
    defaults : boolean = true
) : boolean {

    if(!booleans.length) {

        return defaults;
    }

    for(let boolean of booleans) {

        if(!boolean) {

            return false;
        }
    }

    return true;
}
