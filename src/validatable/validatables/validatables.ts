import Validatable from "@alirya/validatable/validatable";

export default interface Validatables<
    ValidatableList extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>
> {

    validatables : ValidatableList;
}
