import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
export default function UniqueParameter<Type>({ value, validation }: Value<ReadonlyArray<Type>> & Partial<Validation<[Type, Type]>>): Type[];
