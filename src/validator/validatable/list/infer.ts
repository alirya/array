import Validator from '@alirya/validator/validator';
import InferReturn from '@alirya/validator/validatable/infer-static';

type Infer<Schema extends Validator[]> = {
    [Key in keyof Schema] : InferReturn<Schema[Key]>
};

export default Infer;
