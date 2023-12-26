import Message from '@axiona/message/message.js';
import InferMessage from '@axiona/message/message/infer.js';

type Infer<Schema extends Message[]> = {
    [Key in keyof Schema] : InferMessage<Schema[Key]>
};


export default Infer;
