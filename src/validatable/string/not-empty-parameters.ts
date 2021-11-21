import StringNotEmpty from "../../assert/string/not-empty-parameters";


export default function NotEmptyParameters(
    value : ReadonlyArray<unknown>,
    valid : boolean,
) : string {

    return StringNotEmpty(value, valid)
}
