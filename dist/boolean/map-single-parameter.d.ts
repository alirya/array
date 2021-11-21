import MapSingle from "../function/parameter/list/map-single";
export default function MapSingleParameter<ListType extends unknown[]>({ list, validations, }: {
    list: Readonly<ListType>;
    validations: Readonly<MapSingle<ListType>>;
}): boolean;
