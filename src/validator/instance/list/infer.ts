import Validator from '@alirya/validator/validator';
import Instance from '@alirya/validator/validatable/infer-static';

type Infer<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Instance<Schema[Key]>
};

export default Infer;
