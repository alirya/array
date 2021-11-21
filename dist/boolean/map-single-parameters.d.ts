import MapSingle from "../function/parameter/list/map-single";
export default function MapSingleParameters<List extends unknown[]>(values: Readonly<List>, validations: Readonly<MapSingle<List>>): boolean;
