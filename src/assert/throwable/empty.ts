import EmptyType from '../../assert/string/empty.js';

export default function Empty(string : unknown[]) : Error {

    return new Error(EmptyType.Parameters(string, false));
}
