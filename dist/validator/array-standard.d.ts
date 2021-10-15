import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
/**
 * create {@see Array} with default message
 */
export default function ArrayStandard(): Validator<unknown, Array<any>, Readonly<Instance<unknown, string>>>;
