(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/list-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const list_callback_1 = require("../validatable/list-callback");
    /**
     * implementation of {@link Interface}
     */
    class ValueCallback {
        /**
         * @param validator
         *
         * @param map
         * process list of value and {@param validator} to list of {@link Instance}
         *
         * @param validation
         * process result of {@param map} to single {@link Validatable}
         *
         * @param message
         * process result of {@param map} to single {@link Message}
         */
        constructor(validator, map, validation, message) {
            this.validator = validator;
            this.map = map;
            this.validation = validation;
            this.message = message;
        }
        validate(value) {
            return new list_callback_1.default(value, this.validator, this.map, this.validation, this.message);
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=list-callback.js.map