import ExtractParameter, {ExtractParameterArgument as RemoveParameterArgument} from '../extract-parameter';

export {RemoveParameterArgument};

export default function RemoveParameter<Value>(argument : RemoveParameterArgument<Value>) : void{

    ExtractParameter(argument);
}


