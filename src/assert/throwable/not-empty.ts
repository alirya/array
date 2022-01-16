import NotEmptyType from '../../assert/string/not-empty-parameters';

export default function NotEmpty(string : unknown[]) : Error {

    return new Error(NotEmptyType(string, false));
}
