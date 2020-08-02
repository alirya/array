import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/parameter/instance/infer";

type Infer<Schema extends Validator[]> = {
    [Key in keyof Schema]  : Instance<Schema[Key]>
};

export default Infer;
