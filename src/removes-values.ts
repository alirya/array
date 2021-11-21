import RemovesValuesParameter, {RemovesValuesArgument} from "./removes-values-parameter";
import RemovesValuesParameters from "./removes-values-parameters";

namespace RemovesValues {

    export const Parameters = RemovesValuesParameters;
    export const Parameter = RemovesValuesParameter;
    export type Argument<Value> = RemovesValuesArgument<Value>;
}


export default RemovesValues;
