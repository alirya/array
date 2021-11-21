import RemovesValuesParameter, { RemovesValuesArgument } from "./removes-values-parameter";
import RemovesValuesParameters from "./removes-values-parameters";
declare namespace RemovesValues {
    const Parameters: typeof RemovesValuesParameters;
    const Parameter: typeof RemovesValuesParameter;
    type Argument<Value> = RemovesValuesArgument<Value>;
}
export default RemovesValues;
