import List from "../array/list";
import RemoveIndexParameters from "./remove-index-parameters";

export default function RemoveIndexParameter(
    {
        array,
        index,
    } : List<any> & {index : number}
) : boolean {

    return RemoveIndexParameters(array, index)
}
