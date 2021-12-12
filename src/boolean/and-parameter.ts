import {OrParameterArgument} from "./or-parameter";
import AndParameters from "./and-parameters";

export type AndParametersArgument = OrParameterArgument;

export default function AndParameter(
    {
        defaults,
        array
    } : AndParametersArgument
) : boolean {

    return AndParameters(array, defaults);
}
