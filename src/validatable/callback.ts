import Validatable from '@axiona/validatable/validatable.js';
import Validatables from './validatables/validatables.js';
import {List} from 'ts-toolbelt';

export interface CallbackType<
    ValidatableList extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>,
> extends
    Validatable,
    Validatables<ValidatableList>,
    Iterable<List.UnionOf<ValidatableList>>
{}

export class CallbackParameters<
    ValidatableList extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>,
    Boolean extends boolean = boolean
> implements CallbackType<ValidatableList> {
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


export class CallbackParameter<
    ValidatableList extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>,
    Boolean extends boolean = boolean
> extends CallbackParameters<ValidatableList, Boolean>
{
    constructor(
        {
            validatables,
            validation,
        } : Validatables<ValidatableList> & {validation : (results:ValidatableList)=>Boolean}
    ) {

        super(validatables, validation);
    }


}


namespace Callback {
    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;
    export type Type<
        ValidatableList extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>,
    > = CallbackType<ValidatableList>;
}
export default Callback;
