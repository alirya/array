import Validator from '@axiona/validator/validator.js';
import InferReturn from '@axiona/validator/validatable/infer-static.js';

type Infer<Schema extends Validator[]> = {
    [Key in keyof Schema] : InferReturn<Schema[Key]>
};

export default Infer;
