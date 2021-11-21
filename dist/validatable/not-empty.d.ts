import NotEmptyParameter, { NotEmptyArgument } from "./not-empty-parameter";
import NotEmptyParameters, { NotEmptyType } from "./not-empty-parameters";
declare namespace NotEmpty {
    const Parameter: typeof NotEmptyParameter;
    const Parameters: typeof NotEmptyParameters;
    type Type<Values extends unknown[], MessageType> = NotEmptyType<Values, MessageType>;
    type Argument<Values extends unknown[], MessageType> = NotEmptyArgument<Values, MessageType>;
}
export default NotEmpty;
