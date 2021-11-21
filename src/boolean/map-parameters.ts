import Map from "../function/parameter/list/map";

export default function MapParameters<List extends unknown[][]>(
    values : Readonly<List>,
    validations : Readonly<Map<List>>
) : boolean {

    if(values.length === validations.length) {

        for(let [index, value] of values.entries()) {

            if(!validations[index](...value)) {

                return false;
            }
        }

        return true;
    }

    return false;
}
