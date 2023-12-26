export default function Array(values : unknown) : values is unknown[] {

    return globalThis.Array.isArray(values);
}

export {Array as IsArray};
