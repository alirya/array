import RandomBoolean from '@axiona/boolean/random.js';
import {ShuffleParameters} from '../../shuffle.js';

export default function Random<Value>(
    values : ReadonlyArray<Value>,
    random : ()=> boolean = RandomBoolean
) : Value|undefined {

    if(values.length === 0) {

        return undefined;
    }

    values = ShuffleParameters(values, random);

    return values[0];
}

export {Random as RandomValue};
export {Random as RandomPick};
