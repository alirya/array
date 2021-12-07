import EmptyParameters from "./empty-parameters";
export default function EmptyParameter({ value, message, }) {
    return EmptyParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=empty-parameter.js.map