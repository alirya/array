import DuplicateParameter from "./duplicate-parameter";
import DuplicateParameters from "./duplicate-parameters";
declare namespace Duplicate {
    const Parameters: typeof DuplicateParameters;
    const Parameter: typeof DuplicateParameter;
}
export default Duplicate;
