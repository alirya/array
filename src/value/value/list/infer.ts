import Value from '@alirya/value/value';
import InferValue from '@alirya/value/value/infer';

type Infer<Schema extends Value[]> = {
    [Key in keyof Schema] : InferValue<Schema[Key]>
};


export default Infer;
