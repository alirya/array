import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
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
