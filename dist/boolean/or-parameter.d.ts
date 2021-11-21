import Readonly from "../list/readonly";
export declare type OrParameterArgument = Readonly<boolean> & {
    defaults: boolean;
};
export default function OrParameter({ list, defaults, }: OrParameterArgument): boolean;
