export default function RemoveIndexParameters(
    array : any[],
    index : number
) : boolean {

    return array.splice(index, 1).length !== 0;
}
