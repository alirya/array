var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MapCallback_message, _MapCallback_value;
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
export default class MapCallback {
    constructor(value, validators, map, validation, message) {
        this.validators = validators;
        this.map = map;
        this.validation = validation;
        _MapCallback_message.set(this, void 0);
        _MapCallback_value.set(this, void 0);
        __classPrivateFieldSet(this, _MapCallback_value, value, "f");
        __classPrivateFieldSet(this, _MapCallback_message, message, "f");
        this.validatables = this.map(this.value, this.validators);
        this.validatable = this.validation(this.validatables);
    }
    get value() {
        return __classPrivateFieldGet(this, _MapCallback_value, "f").slice(0, this.validators.length);
    }
    get valid() {
        return this.validatable.valid;
    }
    get messages() {
        return this.validatables;
    }
    get message() {
        try {
            return __classPrivateFieldGet(this, _MapCallback_message, "f").call(this, this.validatables);
        }
        catch (e) {
            throw new Error(`error on generating message, ${e}`);
        }
    }
}
_MapCallback_message = new WeakMap(), _MapCallback_value = new WeakMap();
__decorate([
    MemoizeAccessor()
], MapCallback.prototype, "value", null);
__decorate([
    MemoizeAccessor()
], MapCallback.prototype, "message", null);
//# sourceMappingURL=map-callback.js.map