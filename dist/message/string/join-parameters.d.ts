import Message from "@dikac/t-message/message";
export default function JoinParameters<MessageT extends Message<string>[]>(messages: MessageT, separator: string): string;
