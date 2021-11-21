import Guard from "@dikac/t-boolean/validation/guard";
/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */
export declare type ListArgument<Value extends Argument, Argument extends unknown> = Guard<Argument, Value> & {
    error: (value: unknown) => Error;
};
export default function ListParameter<Value extends Argument, Argument extends unknown>(list: ReadonlyArray<Argument>, { validation, error }: ListArgument<Value, Argument>): ReadonlyArray<Value>;
export default function ListParameter<Value extends Argument, Argument extends unknown>(list: Argument[], { validation, error }: ListArgument<Value, Argument>): Value[];
