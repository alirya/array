import Validator from '@alirya/validator/validator';
import Base from '@alirya/validator/subject/allow';

type Allow<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Base<Schema[Key]>
};

export default Allow;
