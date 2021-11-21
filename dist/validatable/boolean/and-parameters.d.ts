import Validatable from "@dikac/t-validatable/validatable";
export default function AndParameters<ValidatableList extends ReadonlyArray<Validatable>>(validatables: ValidatableList, defaults?: boolean): boolean;
