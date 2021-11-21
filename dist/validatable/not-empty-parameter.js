import NotEmptyParameters from "./not-empty-parameters";
export default class NotEmptyParameter extends NotEmptyParameters {
    constructor({ value, message }) {
        super(value, (value, valid) => message({ value, valid }));
    }
}
//# sourceMappingURL=not-empty-parameter.js.map