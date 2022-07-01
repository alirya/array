import List from '../array/list';
export function RemoveIndexParameters(
    array : any[],
    index : number
) : boolean {

    return array.splice(index, 1).length !== 0;
}

export type RemoveIndexArgument = List<any> & {index : number};

export function RemoveIndexParameter(
    {
        array,
        index,
    } : RemoveIndexArgument
) : boolean {

    return RemoveIndexParameters(array, index);
}


namespace RemoveIndex {
    export const Parameters = RemoveIndexParameters;
    export const Parameter = RemoveIndexParameter;
    export type Argument = RemoveIndexArgument;
}
export default RemoveIndex;
