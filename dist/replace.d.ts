import ReplaceParameter, { ReplaceArgumentList, ReplaceArgumentValue } from "./replace-parameter";
import ReplaceParameters from "./replace-parameters";
declare namespace Replace {
    const Parameter: typeof ReplaceParameter;
    const Parameters: typeof ReplaceParameters;
    type ArgumentValue<Array extends any[], Index extends keyof Array> = ReplaceArgumentValue<Array, Index>;
    type ArgumentList<Array extends any[], Index extends keyof Array> = ReplaceArgumentList<Array, Index>;
}
export default Replace;
