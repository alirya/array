import IncludesParameters from "./includes-parameters";

export default function IncludesParameter(
    valid : boolean,
    subject : string = '',
) : string {

    return IncludesParameters(valid, subject);

}
