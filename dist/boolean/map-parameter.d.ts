import Map from "../function/parameter/list/map";
export default function MapParameter<List extends unknown[][]>({ list, validations }: {
    list: Readonly<List>;
    validations: Readonly<Map<List>>;
}): boolean;
