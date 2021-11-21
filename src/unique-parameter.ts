import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import UniqueParameters from "./unique-parameters";

export default function UniqueParameter<Type>(
    {value, validation} : Value<ReadonlyArray<Type>> & Partial<Validation<[Type, Type]>>
) {
    return UniqueParameters(value, validation)
}
