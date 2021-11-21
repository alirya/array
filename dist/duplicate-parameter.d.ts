import Readonly from "./list/readonly";
import Validation from "@dikac/t-boolean/validation/validation";
export default function DuplicateParameter<Value>({ list, validation }: Readonly<Value> & Partial<Validation<[Value, Value]>>): Value[];
