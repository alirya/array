import Map from "../message/message/list/map";
import ListAllParameters from "./list-all-parameters";
export default function ListAllParameter(
// validator : ValidatorType,
// validation : (result:InferReturn<ValidatorType>[])=>ValidatableType,
// message : (result:InferReturn<ValidatorType>[])=>MessageType|InferMessage<InferReturn<ValidatorType>[]> = Map,
{ validator, validation, message = Map, }) {
    return ListAllParameters(validator, validation, message);
}
//# sourceMappingURL=list-all-parameter.js.map