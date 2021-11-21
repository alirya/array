import RemovesValueParameter, { RemovesValueArgument } from "./removes-value-parameter";
import RemovesValueParameters from "./removes-value-parameters";
declare namespace RemovesValue {
    const Parameters: typeof RemovesValueParameters;
    const Parameter: typeof RemovesValueParameter;
    type Argument<Value> = RemovesValueArgument<Value>;
}
export default RemovesValue;
