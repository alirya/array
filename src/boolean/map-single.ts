import MapSingle from '../function/parameter/list/map-single';

export function MapSingleParameters<List extends unknown[]>(
    values : Readonly<List>,
    validations : Readonly<MapSingle<List>>
) : boolean {

    if(values.length === validations.length) {

        for(let [index, value] of values.entries()) {

            if(!validations[index](value)) {

                return false;
            }
        }

        return true;
    }

    return false;
}

export type MapSingleArgument<ListType extends unknown[]> = {
    list : Readonly<ListType>,
    validations : Readonly<MapSingle<ListType>>
};

export function MapSingleParameter<ListType extends unknown[]>(
    {
        list,
        validations,
    } : MapSingleArgument<ListType>
) : boolean {

    return MapSingleParameters(list, validations);
}


namespace MapSingle {
    export const Parameters = MapSingleParameters;
    export const Parameter = MapSingleParameter;
    export type Argument<ListType extends unknown[]> = MapSingleArgument<ListType>;
}
export default MapSingle;
