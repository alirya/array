import {List} from 'ts-toolbelt';
import ResetRef from './void/reset';

/**
 * @param argument
 */
export default function Reset<
    Argument extends ReadonlyArray<unknown>
>(argument : Argument) : List.UnionOf<List.Required<Argument>>[] {

    const copy = argument.slice(0);

    ResetRef(copy);

    return copy as List.UnionOf<List.Required<Argument>>[];
}
