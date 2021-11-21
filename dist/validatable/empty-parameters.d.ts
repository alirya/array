import Validatable from "@dikac/t-validator/validatable/dynamic";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export default function EmptyParameters<Values extends unknown[], MessageType>(value: Values, message: Dynamic.Parameters<Values, MessageType>): Readonly<Validatable<Values, MessageType>>;
