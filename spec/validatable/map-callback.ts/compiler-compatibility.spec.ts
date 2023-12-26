import {MapCallbackParameters} from '../../../dist/validatable/map-callback.js';
import {MapParameters} from '../../../dist/validator/validatable/list/map.js';
import {MapPartialParameters} from '../../../dist/validator/validatable/list/map-partial.js';
import {AndParameters} from '../../../dist/validatable/and.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatorInterface from '@axiona/validator/simple.js';
import ValueInterface from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';
import MessageMap from '../../../dist/message/message/list/map.js';
import {TypeParameters} from '@axiona/type/validator/type.js';
import Instance from '@axiona/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('explicit typed', function() {

    type TypeValidator = [
        ValidatorInterface<any, string, string>,
        ValidatorInterface<any, string, string>,
    ];

    type Type = [
        string,
        string,
    ];

    const validator : TypeValidator = [
        TypeParameters('string'),
        TypeParameters('string'),
    ];

    const value : Type = [
        'name',
        'address',
    ];

    describe('auto', function() {

        const validatable = new MapCallbackParameters(value, validator,
            (value, validators) => MapParameters(value, validators),
            AndParameters,
            (v)=>MessageMap(v)
        );

        const unknown : unknown = validatable.value;

        const record : Type = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        // @ts-expect-error
        instance = validatable.validatables[3];
        // @ts-expect-error
        instance = validatable.validatables[4];
        it('',() => expect(true).toBe(true))
    });

    describe('auto partial', function() {

        const validatable = new MapCallbackParameters(value, validator,
            (value, validators) =>
                <(Validatable & ValueInterface & Message<string>)[]>MapPartialParameters(value, validators),
            AndParameters,
            (v)=>MessageMap(v)
        );

        const unknown : unknown = validatable.value;
        const string : Type = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        instance = validatable.validatables[3];
        instance = validatable.validatables[4];
        it('',() => expect(true).toBe(true))
    });
});


describe('explicit typed', function() {

    const validator  = [
        TypeParameters('string'),
        TypeParameters('string'),
    ];

    const value  = [
        'name',
        'address',
    ];


    describe('auto', function() {

        const validatable = new MapCallbackParameters(value, validator,
            (value, validators) => MapParameters(value, validators),
            AndParameters, (v)=>MessageMap(v)
        );

        const unknown : unknown = validatable.value;

        const value1 : string[] = validatable.value;

        // @ts-expect-error
        const value2 : [string, string] = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        instance = validatable.validatables[3];
        instance = validatable.validatables[4];
        it('',() => expect(true).toBe(true))
    });

    describe('auto partial', function() {

        const validatable = new MapCallbackParameters(value, validator,
            (value, validators) =>
                <(Validatable & ValueInterface & Message<string>)[]>MapPartialParameters(value, validators),
            AndParameters, (v)=>MessageMap(v)
        );

        const unknown : unknown = validatable.value;

        const value1 : string[] = validatable.value;

        // @ts-expect-error
        const value2 : [string, string] = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        instance = validatable.validatables[3];
        instance = validatable.validatables[4];
        it('',() => expect(true).toBe(true))
    });
});


