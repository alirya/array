import Readonly from "../list/readonly";
import OrParameters from "./or-parameters";

export type OrParameterArgument = Readonly<boolean> & {defaults : boolean};

export default function OrParameter(
    // booleans : ReadonlyArray<boolean>,
    // defaults : boolean = true,
    {
        list,
        defaults,
    } : OrParameterArgument
) : boolean {

    return OrParameters(list, defaults);
}
