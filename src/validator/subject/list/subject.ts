import Validator from "@dikac/t-validator/validator";
import Type from "@dikac/t-validator/subject/subject";

type Expectation<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Type<Schema[Key]>
};

export default Expectation;
