import Value from "@dikac/t-value/value";
export default function ArrayParameter({ value, error, }: Value<unknown> & {
    error: (value: unknown) => Error;
}): unknown[];
