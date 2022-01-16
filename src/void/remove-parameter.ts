import ExtractParameter, {ExtractParameterArgument as RemoveParameterArgument} from '../extracparameter';

export {RemoveParameterArgument};

export default function RemoveParameter<Value>(argument : RemoveParameterArgument<Value>) : void{

    ExtractParameter(argument);
}


