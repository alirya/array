import List from "./list/list";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
export default function DifferenceParameter<Type>({ list, value, validation, }: List<Type> & Value<ReadonlyArray<Type>> & Partial<Validation<[Type, Type]>>): Type[];
