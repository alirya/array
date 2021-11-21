export default function OrParameters(list, defaults = true) {
    if (!list.length) {
        return defaults;
    }
    let result = false;
    for (let boolean of list) {
        result = result || boolean;
        if (boolean) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=or-parameters.js.map