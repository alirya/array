import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import {List} from "ts-toolbelt";

export default class CallbackParameters<
    ValidatableList extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>,
    Boolean extends boolean = boolean
> implements
    Validatable,
    Validatables<ValidatableList>,
    Iterable<List.UnionOf<ValidatableList>>
{
    readonly valid : boolean;

    constructor(
        public validatables : ValidatableList,
        public validation : (results:ValidatableList)=>Boolean
    ) {

        this.valid = this.validation(this.validatables);
    }

    * [Symbol.iterator](): Iterator<List.UnionOf<ValidatableList>> {

        yield * this.validatables;
    }
}
