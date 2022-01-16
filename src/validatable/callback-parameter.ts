import Validatable from "@alirya/validatable/validatable";
import Validatables from "./validatables/validatables";
import CallbackParameters from "./callback-parameters";

export default class CallbackParameter<
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
