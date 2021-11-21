import ListPartialParameters from "./list-partial-parameters";
export default function ListPartialParameter(
// validator : ValidatorType,
// validation : (result:Union<InferReturn<ValidatorType>[]>)=>ValidatableType,
// message : ((result:Union<InferReturn<ValidatorType>[]>)=>MessageType|Union<InferMessage<InferReturn<ValidatorType>[]>>) = Map,
// stop : boolean = false,
{ validator, validation, message, stop, }) {
    return ListPartialParameters(validator, validation, message, stop);
}
//# sourceMappingURL=list-partial-parameter.js.map