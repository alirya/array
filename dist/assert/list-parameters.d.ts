/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */
export default function ListParameters<Value extends ArgumentType, ArgumentType extends unknown>(list: ReadonlyArray<ArgumentType>, validation: (value: ArgumentType) => value is Value, error: (value: unknown) => Error): asserts list is Value[];
