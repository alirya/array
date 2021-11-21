/**
 * get and remove selected value
 *
 * @param array
 * @param index
 * if negative will start at the end
 *
 */
export default function ExtractParameters(value, index) {
    return value.splice(index, 1)[0];
}
//# sourceMappingURL=extract-parameters.js.map