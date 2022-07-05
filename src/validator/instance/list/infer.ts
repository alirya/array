import Validator from '@alirya/validator/validator.js';
import Instance from '@alirya/validator/validatable/infer-static.js';

type Infer<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Instance<Schema[Key]>
};

export default Infer;
