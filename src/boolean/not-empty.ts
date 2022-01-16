import Empty from './empty';

export default function NotEmpty(array : ReadonlyArray<unknown>) : boolean {

    return !Empty(array);
}
