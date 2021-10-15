/**
 *  validate array length
 */
// export default class Length<
//     MessageType,
//     ValidatorType extends Validator<number, number, boolean, boolean, Instance<number, MessageType>>
// > implements Validator<
//     any[],
//     any[],
//     boolean,
//     boolean,
//     Readonly<Instance<any[], MessageType> & Validatable<InstanceInfer<ValidatorType>>>
// > {
//
//     constructor(
//         public validator : ValidatorType
//     ) {
//     }
//
//     validate<Argument extends any[]>(value: Argument): Return<any[], Argument, any[], Readonly<Instance<any[], MessageType> & Validatable<InstanceInfer<ValidatorType>>>> {
//
//         let validatable = this.validator.validate(value.length);
//
//         return {
//             get validatable() {
//                 return <InstanceInfer<ValidatorType>> validatable;
//             },
//             get value() {
//                 return value;
//             },
//             get message() {
//                 return validatable.message;
//             },
//             get valid() {
//                 return validatable.valid;
//             }
//         }
//     }
// }
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