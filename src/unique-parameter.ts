import Value from "@alirya/value/value";
import Validation from "@alirya/boolean/validation/validation";
import UniqueParameters from "./unique-parameters";

/**
 * object argument version of {@link UniqueParameters}
 * @param value
 * @param validation
 */
export default function UniqueParameter<Type>(
    {value, validation} : Value<ReadonlyArray<Type>> & Partial<Validation<[Type, Type]>>
) {
    return UniqueParameters(value, validation)
}
