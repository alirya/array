export default function ReplaceParameters(value, index, replace) {
    value[index] = replace(value[index], index);
    return value;
}
//# sourceMappingURL=replace-parameters.js.map