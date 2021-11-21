import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type ArrayArgument = Validatable & Value & {
    conversion: (value: unknown) => string;
} & {
    subject: string;
};
export default function ArrayParameter({ valid, value, subject, conversion }: ArrayArgument): string;
