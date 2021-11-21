import FilterParameters from "./filter-parameters";
export default function MessagesFilterParameters(list, filter = () => true) {
    return FilterParameters(list.messages, filter);
}
//# sourceMappingURL=messages-filter-parameters.js.map