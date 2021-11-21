var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
export default class ListCallbackParameters {
    constructor(value, validator, map, validation, message) {
        this.value = value;
        this.validator = validator;
        this.messageFactory = message;
        this.validatables = map(value, this.validator);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }
    get message() {
        try {
            return this.messageFactory(this.validatables);
        }
        catch (e) {
            throw new Error(`error on generating message, ${e}`);
        }
    }
}
__decorate([
    MemoizeAccessor()
], ListCallbackParameters.prototype, "message", null);
//# sourceMappingURL=list-callback-parameters.js.map