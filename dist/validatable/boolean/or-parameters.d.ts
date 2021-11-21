import Validatable from "@dikac/t-validatable/validatable";
export default function OrParameters<ValidatableList extends ReadonlyArray<Validatable>>(validatables: ValidatableList, defaults?: boolean): boolean;
