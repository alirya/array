import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import MapCallbackInterface from "./map";
import ListStrict from "./validatable/list/infer";
import Unions from "../unions";
import InferMessage from "../message/message/list/infer";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
import StrictOmit from "@dikac/t-object/strict-omit";
import { Required } from "utility-types";
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
export declare type MapPartialArgument<Validators extends Validator[] = Validator[], ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorsContainer<Validators> & Partial<Message<(result: Unions<ListStrict<Validators>>) => MessageType>> & {
    validation: (result: Unions<ListStrict<Validators>>) => ValidatableType;
    stop?: boolean;
};
export default function MapPartialParameter<Validators extends Validator[] = Validator[], ValidatableType extends Validatable = Validatable>({ validators, validation, }: StrictOmit<MapPartialArgument<Validators, ValidatableType, unknown>, 'message'>): MapCallbackInterface<Validators, Unions<ListStrict<Validators>>, Unions<InferMessage<ListStrict<Validators>>>, ValidatableType>;
export default function MapPartialParameter<Validators extends Validator[] = Validator[], ValidatableType extends Validatable = Validatable, MessageType = unknown>({ validators, validation, message, stop, }: Required<MapPartialArgument<Validators, ValidatableType, MessageType>, 'message'>): MapCallbackInterface<Validators, Unions<ListStrict<Validators>>, MessageType, ValidatableType>;
