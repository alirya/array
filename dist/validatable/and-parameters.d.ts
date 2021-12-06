import Validatable from "@dikac/t-validatable/validatable";
import Callback from "./callback-parameters";
export default function AndParameters<List extends ReadonlyArray<Validatable>>(validatables: List, defaults?: boolean): Callback<List>;
