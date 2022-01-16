import Message from '@alirya/message/message';
import InferMessage from '@alirya/message/message/infer';

type Infer<Schema extends Message[]> = {
    [Key in keyof Schema] : InferMessage<Schema[Key]>
};


export default Infer;
