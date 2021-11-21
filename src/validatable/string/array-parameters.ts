import ArrayMessage from "../../assert/string/array-parameters";


export default function ArrayParameters(
    value : unknown,
    valid : boolean
) : string {

    return ArrayMessage(value, valid)
}

