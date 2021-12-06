import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "./validatables/validatables";
import Callback from "./callback-parameters";
export default function OrParameter<Validatables extends Validatable[]>({ validatables, defaults, }: ValidatableContainer<Validatables> & {
    defaults: boolean;
}): Callback<Validatables>;
