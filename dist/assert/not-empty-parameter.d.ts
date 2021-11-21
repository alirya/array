export default function NotEmptyParameter(value: unknown[], error?: (value: unknown[]) => Error): asserts value is Array<unknown>;
