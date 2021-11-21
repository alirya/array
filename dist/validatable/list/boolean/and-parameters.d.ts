import Validatable from "@dikac/t-validatable/validatable";
export default function AndParameters<List extends ReadonlyArray<Validatable>>(validatables: List, defaults?: boolean): boolean;
