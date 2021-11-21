import ListParameters from "./list-parameters";
export default function ListParameter(list, 
//validation : (value:Argument)=>value is Value,
//error : (value:unknown)=>Error,
{ validation, error }) {
    return ListParameters(list, validation, error);
}
//# sourceMappingURL=list-parameter.js.map