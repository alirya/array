import Value from "@dikac/t-value/value";
export default function ListParameter({ value, expect, subject, conversion, }: Value<unknown> & {
    expect: string;
    subject?: string;
    conversion?: (value: unknown) => string;
}): Error;
