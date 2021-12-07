import List from "../list/list";
import RemoveIndexParameters from "./remove-index-parameters";

export default function RemoveIndexParameter(
    {
        list,
        index,
    } : List<any> & {index : number}
) : boolean {

    return RemoveIndexParameters(list, index)
}
