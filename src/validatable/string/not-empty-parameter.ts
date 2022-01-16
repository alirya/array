import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import NotEmptyParameters from './not-empty-parameters';


export default function NotEmptyParameter({valid, value} : Readonly<Value<unknown[]> & Validatable>) : string {

    return NotEmptyParameters(value, valid);
}
