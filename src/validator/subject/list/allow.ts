import Validator from '@axiona/validator/validator.js';
import Base from '@axiona/validator/subject/allow.js';

type Allow<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Base<Schema[Key]>
};

export default Allow;
