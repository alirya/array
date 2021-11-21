import CallbackParameter from "./callback-parameter";
import CallbackParameters from "./callback-parameters";
var Callback;
(function (Callback) {
    Callback.Parameter = CallbackParameter;
    Callback.Parameters = CallbackParameters;
    //export type Type<Values extends unknown[], MessageType> = CallbackParameterType<Values, MessageType>;
})(Callback || (Callback = {}));
export default Callback;
//# sourceMappingURL=callback.js.map