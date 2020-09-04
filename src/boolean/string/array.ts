import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Array(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = SentencesIs(valid);
    sentence.object.push('array');
    sentence.subject.push(subject);

    if(!valid) {

        sentence.subject.push(conversion(value));
    }

    return sentence.message;
}
