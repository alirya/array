import NotEmptyParameter from "./not-empty-parameter";
import NotEmptyParameters from "./not-empty-parameters";
declare namespace Empty {
    const Parameter: typeof NotEmptyParameter;
    const Parameters: typeof NotEmptyParameters;
}
export default Empty;
