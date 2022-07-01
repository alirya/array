import {MapCallbackParameters} from '../../../dist/validatable/map-callback';
import {MapParameters} from '../../../dist/validator/validatable/list/map';
import {MapPartialParameters} from '../../../dist/validator/validatable/list/map-partial';
import {AndParameters} from '../../../dist/validatable/and';
import {OrParameters} from '../../../dist/validatable/or';
import Validatable from '@alirya/validatable/validatable';
import ValidatorInterface from '@alirya/validator/simple';
import ValueInterface from '@alirya/value/value';
import Message from '@alirya/message/message';
import MessageMap from '../../../dist/message/message/list/map';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

type TypeValidator = [
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, number, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
];

type Type = [
    object,
    object,
    object,
];

let validator : TypeValidator = [
    TypeParameters('string'),
    TypeParameters('number'),
    TypeParameters('string'),
];

let value : Type = [{}, {}, {}];

describe('complete', function() {

    it(`and validation`, () => {

        let and = new MapCallbackParameters(value, validator,
            (value, validators) => MapParameters(value, validators),
            (v)=>AndParameters(v),
            (v)=>MessageMap(v)
        );

        expect(and.valid).toBe(false);
        expect(and.value).toEqual(value);

        expect(typeof and.validatables[0].message).toBe('string');
        expect(and.validatables[0].valid).toBe(false);

        expect(typeof and.validatables[1].message).toBe('string');
        expect(and.validatables[1].valid).toBe(false);

        expect(typeof and.validatables[2].message).toBe('string');
        expect(and.validatables[2].valid).toBe(false);

        // @ts-expect-error
        expect(and.validatables[3]).toBe(undefined);
    });

    it(`or validation `, () => {

        let or = new MapCallbackParameters(value, validator,
            (value, validators) => MapParameters(value, validators),
            (v)=>OrParameters(v),
            (v)=>MessageMap(v)
        );

        expect(or.valid).toBe(false);
        expect(or.value).toEqual(value);

        expect(typeof or.validatables[0].message).toBe('string');
        expect(or.validatables[0].valid).toBe(false);

        expect(typeof or.validatables[1].message).toBe('string');
        expect(or.validatables[1].valid).toBe(false);

        expect(typeof or.validatables[2].message).toBe('string');
        expect(or.validatables[2].valid).toBe(false);

        // @ts-expect-error
        expect(or.validatables[3]).toBe(undefined);
    });
});


describe('partial', function() {
    it(`and validation`, () => {

        let and = new MapCallbackParameters(value, validator,
            (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>MapPartialParameters(value, validators),
            (v)=>AndParameters(v),
            (v)=>MessageMap(v)
        );

        expect(and.valid).toBe(false);
        expect(and.value).toEqual(value);

        expect(and.validatables[0].valid).toBe(false);
        expect(typeof and.validatables[0].message).toBe('string');

        expect(and.validatables[1]).toBe(<any>undefined);
        expect(and.validatables[2]).toBe(<any>undefined);
        expect(and.validatables[3]).toBe(<any>undefined);
    });

    it(`or validation `, () => {

        let or = new MapCallbackParameters(value, validator,
            (value, validators) =>
                <(Validatable & ValueInterface & Message<string>)[]>MapPartialParameters(value, validators),
            (v)=>OrParameters(v),
            MessageMap
        );

        expect(or.valid).toBe(false);
        expect(or.value).toEqual(value);

        expect(typeof or.validatables[0].message).toBe('string');
        expect(or.validatables[0].valid).toBe(false);

        expect(or.validatables[1]).toBe(<any>undefined);
        expect(or.validatables[2]).toBe(<any>undefined);
        expect(or.validatables[3]).toBe(<any>undefined);
    });
});
