import Value from '@alirya/value/value.js';
import RecordInfer from './infer.js';
import ValueValue from '@alirya/value/value/value.js';

export default function Map<
    Instance extends Value[]
>(record : Instance) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> record.map(ValueValue);
}
