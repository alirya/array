import MapSingle from '../function/parameter/list/map-single';
import MapSingleParameters from './map-single-parameters';

export default function MapSingleParameter<ListType extends unknown[]>(
    {
        list,
        validations,
    } : {
        list : Readonly<ListType>,
        validations : Readonly<MapSingle<ListType>>
    }
) : boolean {

    return MapSingleParameters(list, validations);
}
