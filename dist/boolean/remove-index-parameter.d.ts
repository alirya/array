import List from "../list/list";
export default function RemoveIndexParameter({ list, index, }: List<any> & {
    index: number;
}): boolean;
