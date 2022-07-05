import Empty from './empty.js';

export default function NotEmpty(array : ReadonlyArray<unknown>) : boolean {

    return !Empty(array);
}
