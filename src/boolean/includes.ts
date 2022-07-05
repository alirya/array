import StringIncludes from '../assert/string/includes.js';
import {EqualParameter, EqualParameters} from '@alirya/boolean/equal.js';
import Validation from '@alirya/boolean/function/validation.js';
import ValueType from '@alirya/value/value.js';
import CompareType from '@alirya/boolean/compare/compare.js';
import Value from '@alirya/value/value.js';

export function IncludesParameters<Type>(
    value : Type,
    trues : ReadonlyArray<Type>,
    falses : ReadonlyArray<Type>,
    defaults : (value:Type, trues:ReadonlyArray<Type>, falses:ReadonlyArray<Type>)=>boolean = (value, trues, falses) => {throw new Error(StringIncludes.Parameters(false));},
    compare : (value:Type, compare:Type)=>boolean = EqualParameters,
) : boolean {

    for(const val of trues) {

        if(compare(value, val)) {

            return true;
        }
    }

    for(const val of falses) {

        if(compare(value, val)) {

            return false;
        }
    }

    return defaults(value, trues, falses);
}

export interface IncludesArgumentDefaultsArgument<Type> extends Value<Type> {
    trues : ReadonlyArray<Type>;
    falses : ReadonlyArray<Type>;
}

export type IncludesArgument<Type> = IncludesArgumentDefaultsArgument<Type> & {
    compare : Validation<[ValueType<Type> & CompareType<Type>]>;
    defaults: Validation<[IncludesArgumentDefaultsArgument<Type>]>;
};

export function IncludesParameter<Type>(
{
    value,
    trues,
    falses,
    defaults = (argument) => {throw new Error(StringIncludes.Parameters(false));},
    compare  = EqualParameter,

    } : IncludesArgument<Type>
) : boolean {

    return IncludesParameters(
        value,
        trues,
        falses,
        (value, trues, falses)=>defaults({value, trues, falses}),
        (value, comparison) => compare({value, compare:comparison})
    );
}


namespace Includes {
    export const Parameters = IncludesParameters;
    export const Parameter = IncludesParameter;
    export type ArgumentDefaultsArgument<Type> = IncludesArgumentDefaultsArgument<Type>;
    export type Argument<Type> = IncludesArgument<Type>;
}
export default Includes;
