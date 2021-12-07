import Readonly from "../list/readonly";
import OrParameters from "./or-parameters";

export type OrParameterArgument = Readonly<boolean> & {defaults : boolean};

export default function OrParameter(
    {
        list,
        defaults,
    } : OrParameterArgument
) : boolean {

    return OrParameters(list, defaults);
}
