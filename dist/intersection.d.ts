import IntersectionParameter, { IntersectionParameterList, IntersectionParameterValue } from "./intersection-parameter";
import IntersectionParameters from "./intersection-parameters";
declare namespace Intersection {
    const Parameters: typeof IntersectionParameters;
    const Parameter: typeof IntersectionParameter;
    type ArgumentValue<Type> = IntersectionParameterValue<Type>;
    type ArgumentList<Type> = IntersectionParameterList<Type>;
}
export default Intersection;
