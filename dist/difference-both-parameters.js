import DifferenceLeft from "./difference-parameters";
import Equal from "@dikac/t-boolean/equal";
export default function DifferenceBothParameters(list1, list2, validation = Equal) {
    let left = DifferenceLeft(list1, list2, validation);
    let right = DifferenceLeft(list2, list1, validation);
    return [...new Set([...left, ...right])];
}
//# sourceMappingURL=difference-both-parameters.js.map