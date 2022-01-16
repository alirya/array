import AssertEmpty from '../../assert/string/empty-parameters';

export default function EmptyParameters(value : unknown[], valid : boolean) : string {

    return AssertEmpty(value, valid);
}
