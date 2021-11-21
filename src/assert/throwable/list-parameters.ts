import ListType from "../string/list-parameters";

export default function ListParameters(
    value : unknown,
    expect : string,
    subject : string = 'type',
    conversion : (value: unknown)=>string = value=>typeof value,
) : Error {

    return new Error(ListType(value, false, expect, subject, conversion))
}
