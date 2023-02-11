import NotEmptyType from '../../assert/string/not-empty.js';

export default function NotEmpty(string : unknown[]) : Error {

    return new Error(NotEmptyType.Parameters(string, false));
}
