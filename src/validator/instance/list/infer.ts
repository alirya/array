import Validator from '@axiona/validator/validator.js';
import Instance from '@axiona/validator/validatable/infer-static.js';

type Infer<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Instance<Schema[Key]>
};

export default Infer;
