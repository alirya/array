import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "./validatables/validatables";
import OrParameters from "./or-parameters";
import Callback from "./callback-parameters";

export default function OrParameter<Validatables extends Validatable[]>(
    {
        validatables,
        defaults,
    } : ValidatableContainer<Validatables> & {defaults : boolean}
) : Callback<Validatables> {

    return OrParameters(validatables, defaults);
}

