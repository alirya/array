import EmptyType from '../../assert/string/empty-parameters';

export default function Empty(string : unknown[]) : Error {

    return new Error(EmptyType(string, false));
}
