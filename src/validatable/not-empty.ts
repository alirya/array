import NotEmptyParameter, {NotEmptyArgument} from "./not-empty-parameter";
import NotEmptyParameters, {NotEmptyType} from "./not-empty-parameters";

namespace NotEmpty {

    export const Parameter = NotEmptyParameter;
    export const Parameters = NotEmptyParameters;
    export type Type<
        Values extends unknown[],
        MessageType
    > = NotEmptyType<
        Values,
        MessageType
    >;

    export type Argument<
        Values extends unknown[],
        MessageType
    > = NotEmptyArgument<
        Values,
        MessageType
    >;
}

export default NotEmpty;

