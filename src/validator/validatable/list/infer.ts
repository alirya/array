import Validator from '@alirya/validator/validator.js';
import InferReturn from '@alirya/validator/validatable/infer-static.js';

type Infer<Schema extends Validator[]> = {
    [Key in keyof Schema] : InferReturn<Schema[Key]>
};

export default Infer;
