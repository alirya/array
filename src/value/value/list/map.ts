import Value from '@axiona/value/value.js';
import RecordInfer from './infer.js';
import ValueValue from '@axiona/value/value/value.js';

export default function Map<
    Instance extends Value[]
>(record : Instance) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> record.map(ValueValue);
}
