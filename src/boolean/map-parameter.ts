import Map from "../function/parameter/list/map";
import MapParameters from "./map-parameters";

export default function MapParameter<List extends unknown[][]>(
    {
        list,
        validations
    } : {
        list: Readonly<List>,
        validations : Readonly<Map<List>>
    }
) : boolean {

    return MapParameters(list, validations);
}
