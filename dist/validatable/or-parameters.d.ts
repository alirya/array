import Validatable from "@dikac/t-validatable/validatable";
import Callback from "./callback-parameters";
export default function OrParameters<Validatables extends ReadonlyArray<Validatable>>(validatables: Validatables, defaults?: boolean): Callback<Validatables>;
