import ReplaceParameter, {ReplaceArgumentList, ReplaceArgumentValue} from "./replace-parameter";
import ReplaceParameters from "./replace-parameters";

namespace Replace {
    export const Parameter = ReplaceParameter;
    export const Parameters = ReplaceParameters;
    export type ArgumentValue<Array extends any[], Index extends keyof Array> = ReplaceArgumentValue<Array, Index>;
    export type ArgumentList<Array extends any[], Index extends keyof Array> = ReplaceArgumentList<Array, Index>;
}
export default Replace;
