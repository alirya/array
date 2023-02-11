import Map from '../function/parameter/list/map.js';

export function MapParameters<List extends unknown[][]>(
    values : Readonly<List>,
    validations : Readonly<Map<List>>
) : boolean {

    if(values.length === validations.length) {

        for(const [index, value] of values.entries()) {

            if(!validations[index](...value)) {

                return false;
            }
        }

        return true;
    }

    return false;
}

export type MapArgument<List extends unknown[][]> = {
    list: Readonly<List>,
    validations : Readonly<Map<List>>
};

export function MapParameter<List extends unknown[][]>(
    {
        list,
        validations
    } : MapArgument<List>
) : boolean {

    return MapParameters(list, validations);
}


namespace Map {
    export const Parameters = MapParameters;
    export const Parameter = MapParameter;
    export type Argument<List extends unknown[][]> = MapArgument<List>;
}
export default Map;
