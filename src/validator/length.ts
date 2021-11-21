import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Validatable from "@dikac/t-validatable/validatable/validatable";
import InstanceInfer from "@dikac/t-validator/validatable/infer-static";

/**
 *  validate array length
 */

export default function Length<
    MessageType,
    ValidatorType extends Validator<number, number, boolean, boolean, Instance<number, MessageType>>
> (
    validator : ValidatorType
) : Validator<
    any[],
    any[],
    boolean,
    boolean,
    Readonly<Instance<any[], MessageType> & Validatable<InstanceInfer<ValidatorType>>>
> {
    return function (value) {

        let validatable = validator(value.length);

        return {
            get validatable() {
                return <InstanceInfer<ValidatorType>> validatable;
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
        }
    } as Validator<
        any[],
        any[],
        boolean,
        boolean,
        Readonly<Instance<any[], MessageType> & Validatable<InstanceInfer<ValidatorType>>>
        >
}
