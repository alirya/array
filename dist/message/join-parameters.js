import Reset from "../reset";
export default class JoinParameters {
    constructor(messages, separator) {
        this.messages = messages;
        this.separator = separator;
    }
    get message() {
        let messages = Reset(this.messages);
        return messages.map(message => message.message).join(this.separator);
    }
    toString() {
        return this.message;
    }
}
//# sourceMappingURL=join-parameters.js.map