import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import MapCallbackInterface from "./map";
import ListStrict from "./validatable/list/infer";
import Union from "../union";
import InferMessage from "../message/message/list/infer";
/**
 * more specific implementation of {@link MapCallback}
 *
 * Validate list of value with list of {@link Validator}, according to their indexes
 * stop on encounter invalid result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against list of value
 *
 * @param validation
 * process partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process partial result from {@link Validator} list into {@link Message} value
 *
 * @param stop
 * stop validation operation condition
 */
export default function MapPartial<Validators extends Validator[] = Validator[], ValidatableType extends Validatable = Validatable>(validators: Validators, validation: (result: Union<ListStrict<Validators>>) => ValidatableType, stop?: boolean): MapCallbackInterface<Validators, Union<ListStrict<Validators>>, Union<InferMessage<ListStrict<Validators>>>, ValidatableType>;
export default function MapPartial<Validators extends Validator[] = Validator[], ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Validators, validation: (result: Union<ListStrict<Validators>>) => ValidatableType, message: (result: Union<ListStrict<Validators>>) => MessageType, stop?: boolean): MapCallbackInterface<Validators, Union<ListStrict<Validators>>, MessageType, ValidatableType>;
