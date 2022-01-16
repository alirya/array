import Readonly from '../array/readonly';
import OrParameters from './or-parameters';

export type OrParameterArgument = Readonly<boolean> & {defaults : boolean};

export default function OrParameter(
    {
        array,
        defaults,
    } : OrParameterArgument
) : boolean {

    return OrParameters(array, defaults);
}
