import EqualBoolean from '@alirya/boolean/equal';
import ValidationContainer from '@alirya/boolean/validation/validation';
import Validation from '@alirya/boolean/function/validation';
import {List} from 'ts-toolbelt';

export function EqualParameters<Value extends ReadonlyArray<unknown>>(
    value : Value,
    compare : Value,
    validation : Validation<[List.UnionOf<Value>, List.UnionOf<Value>]> = EqualBoolean.Parameters
) : boolean {

    if(value.length !== compare.length) {

        return false;
    }

    for(const [index, val] of value.entries()) {

        if(!validation(val, compare[index])) {

            return false;
        }
    }

    return true;
}

export type EqualArgument<Type extends ReadonlyArray<unknown>> =
  EqualBoolean.Argument<Type>  & EqualArgumentValidation<Type>;

export type EqualArgumentValidation<Value  extends ReadonlyArray<unknown>> = Partial<ValidationContainer<[EqualBoolean.Argument<List.UnionOf<Value>>]>>;

export function EqualParameter<Value extends ReadonlyArray<unknown>>(
  {
      value,
      compare,
      validation = EqualBoolean.Parameter
  } : EqualArgument<Value>
) : boolean {

    return EqualParameters(value, compare, (value, compare) => validation({value, compare}));
}


namespace Equal {
    export const Parameters = EqualParameters;
    export const Parameter = EqualParameter;
    export type Argument<Value extends ReadonlyArray<unknown>> = EqualArgument<Value>;
    export type ArgumentValidation<Value extends ReadonlyArray<unknown>> = EqualArgumentValidation<Value>;
}
export default Equal;
