import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "../validatables/validatables";
export default function AndParameter<List extends ReadonlyArray<Validatable>>({ validatables, defaults, }: Validatables<List> & {
    defaults?: boolean;
}): boolean;
