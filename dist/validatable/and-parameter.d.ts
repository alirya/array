import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import Callback from "./callback-parameters";
export declare type ArrayArgument<List extends Validatable[]> = Validatables<List> & {
    defaults: boolean;
};
export default function AndParameter<List extends Validatable[]>({ validatables, defaults, }: ArrayArgument<List>): Callback<List>;
