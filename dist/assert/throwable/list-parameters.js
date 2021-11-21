import ListType from "../string/list-parameters";
export default function ListParameters(value, expect, subject = 'type', conversion = value => typeof value) {
    return new Error(ListType(value, false, expect, subject, conversion));
}
//# sourceMappingURL=list-parameters.js.map