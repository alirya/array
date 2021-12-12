import ValueInterface from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import List from "../list/list";
import ExtractParameters from "../extract-parameters";
import ExtractParameter, {ExtractParameterArgument as RemoveParameterArgument} from "../extract-parameter";

export {RemoveParameterArgument};

export default function RemoveParameter<Value>(argument : RemoveParameterArgument<Value>) : void{

    ExtractParameter(argument);
}


