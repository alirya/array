import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListReturn from "./validatable/list/infer";
import Unions from "../unions";
import Value from "./value";
import InferMessage from "../message/message/list/infer";
/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with list of {@link Validator}
 * stop on encounter that match {@param stop} result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined partial result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */
export default function ValuePartialParameters<BaseType = unknown, ValueType extends BaseType = BaseType, Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[], ReturnType extends Validatable = Validatable>(validators: Validators, validation: (result: Unions<ListReturn<Validators>>) => ReturnType): Value<BaseType, ValueType, Unions<InferMessage<ListReturn<Validators>>>, Validators, Unions<ListReturn<Validators>>, ReturnType>;
export default function ValuePartialParameters<BaseType = unknown, ValueType extends BaseType = BaseType, Validators extends Validator<BaseType, ValueType>[] = Validator<BaseType, ValueType>[], ReturnType extends Validatable = Validatable, MessageType = unknown>(validators: Validators, validation: (result: Unions<ListReturn<Validators>>) => ReturnType, message: (result: Unions<ListReturn<Validators>>) => MessageType, stop?: boolean): Value<BaseType, ValueType, MessageType, Validators, Unions<ListReturn<Validators>>, ReturnType>;
