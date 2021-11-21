import CallbackParameters from "./callback-parameters";
export default class CallbackParameter extends CallbackParameters {
    constructor(
    // public validatables : ValidatableList,
    // public validation : (results:ValidatableList)=>Boolean,
    { validatables, validation, }) {
        //this.valid = this.validation(this.validatables);
        super(validatables, validation);
    }
}
//# sourceMappingURL=callback-parameter.js.map