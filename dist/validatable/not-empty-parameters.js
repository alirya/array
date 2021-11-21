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
var _NotEmptyParameters_message;
import NotEmptyArgument from "../boolean/not-empty";
export default class NotEmptyParameters {
    constructor(value, message) {
        this.value = value;
        _NotEmptyParameters_message.set(this, void 0);
        __classPrivateFieldSet(this, _NotEmptyParameters_message, message, "f");
        this.valid = NotEmptyArgument(value);
    }
    *[(_NotEmptyParameters_message = new WeakMap(), Symbol.iterator)]() {
        yield* this.value;
    }
    get message() {
        return __classPrivateFieldGet(this, _NotEmptyParameters_message, "f").call(this, this.value, this.valid);
    }
}
//# sourceMappingURL=not-empty-parameters.js.map