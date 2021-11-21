export default class CallbackParameters {
    constructor(validatables, validation) {
        this.validatables = validatables;
        this.validation = validation;
        this.valid = this.validation(this.validatables);
    }
    *[Symbol.iterator]() {
        yield* this.validatables;
    }
}
//# sourceMappingURL=callback-parameters.js.map