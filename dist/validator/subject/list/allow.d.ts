import Validator from "@dikac/t-validator/validator";
import Base from "@dikac/t-validator/subject/allow";
declare type Allow<Schema extends Validator[]> = {
    [Key in keyof Schema]: Base<Schema[Key]>;
};
export default Allow;
