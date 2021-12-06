import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import { List } from "ts-toolbelt";
export default class CallbackParameters<ValidatableList extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>, Boolean extends boolean = boolean> implements Validatable, Validatables<ValidatableList>, Iterable<List.UnionOf<ValidatableList>> {
    validatables: ValidatableList;
    validation: (results: ValidatableList) => Boolean;
    readonly valid: boolean;
    constructor(validatables: ValidatableList, validation: (results: ValidatableList) => Boolean);
    [Symbol.iterator](): Iterator<List.UnionOf<ValidatableList>>;
}
