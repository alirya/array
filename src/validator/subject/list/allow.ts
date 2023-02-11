import Validator from '@alirya/validator/validator.js';
import Base from '@alirya/validator/subject/allow.js';

type Allow<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Base<Schema[Key]>
};

export default Allow;
