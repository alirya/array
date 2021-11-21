import Map from "../function/parameter/list/map";
export default function MapParameters<List extends unknown[][]>(values: Readonly<List>, validations: Readonly<Map<List>>): boolean;
