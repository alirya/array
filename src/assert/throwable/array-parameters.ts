import ArrayType from '../string/array-parameters';

export default function ArrayParameters(
    value : unknown,
    subject : string = 'type',
    conversion : (value: unknown)=>string = value=>typeof value
) : Error {

    return new Error(ArrayType(value, false, subject, conversion));
}
