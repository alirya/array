/**
 *  validate array length
 */
export default function Length(validator) {
    return function (value) {
        let validatable = validator(value.length);
        return {
            get validatable() {
                return validatable;
            },
            get value() {
                return value;
            },
            get message() {
                return validatable.message;
            },
            get valid() {
                return validatable.valid;
            }
        };
    };
}
//# sourceMappingURL=length.js.map