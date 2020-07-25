(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Filter(list, filter) {
        let result = [];
        for (const property in list) {
            const value = list[property];
            if (filter(value)) {
                // @ts-ignore
                result[property] = value;
            }
        }
        return result;
    }
    exports.default = Filter;
});
//# sourceMappingURL=filter.js.map