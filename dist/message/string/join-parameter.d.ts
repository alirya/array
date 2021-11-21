import Message from "@dikac/t-message/message";
import { JoinParameterArgument } from "../join-parameter";
export { JoinParameterArgument };
export default function JoinParameter<MessageT extends Message<string>[]>({ messages, separator, }: JoinParameterArgument<MessageT>): string;
