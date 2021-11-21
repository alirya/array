import Equal from "@dikac/t-boolean/equal";
import DifferenceBothParameters from "./difference-both-parameters";
export default function DifferenceBothParameter(compare = Equal, { list, validation }) {
    return DifferenceBothParameters(...list, validation);
}
//# sourceMappingURL=difference-both-parameter.js.map