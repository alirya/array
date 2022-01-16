import StringIncludes from "../assert/string/includes-parameters";
import Equal from "@alirya/boolean/equal";

// TODO CHANGE PARAMETER ORDER default last?
export default function IncludesParameter<Type>(
    value : Type,
    trues : ReadonlyArray<Type>,
    falses : ReadonlyArray<Type>,
    defaults : (value:Type, trues:ReadonlyArray<Type>, falses:ReadonlyArray<Type>)=>boolean = (value, trues, falses) => {throw new Error(StringIncludes(false))},
    compare : (value:Type, compare:Type)=>boolean = Equal,
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
