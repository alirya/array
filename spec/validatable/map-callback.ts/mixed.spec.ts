import Map from '../../../dist/validatable/map-callback.js';
import Standard from '../../../dist/validator/validatable/list/map.js';
import PartialStandard from '../../../dist/validator/validatable/list/map-partial.js';
import And from '../../../dist/validatable/and.js';
import Or from '../../../dist/validatable/or.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatorInterface from '@alirya/validator/simple.js';
import ValueInterface from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';
import MessageMap from '../../../dist/message/message/list/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Instance from '@alirya/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

type TypeValidator = [
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, number, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
];

type Type = [
    string,
    string,
    string,
];

const validator : TypeValidator= [
    TypeParameters('string'),
    TypeParameters('number'),
    TypeParameters('string'),
];

const value : Type = [
    '11',
    'name',
    'address',
];

describe('complete', function() {

    it('and validation', () => {

        const and = new Map.Parameters(value, validator,
            (value, validators) => Standard.Parameters(value, validators),
            (v)=>And.Parameters(v), (v)=>MessageMap(v)
        );

        expect(and.valid).toBe(false);
        expect(and.value).toEqual(value);

        expect(and.validatables[0].valid).toBe(true);
        expect(typeof and.validatables[0].message).toBe('string');

        expect(and.validatables[1].valid).toBe(false);
        expect(typeof and.validatables[1].message).toBe('string');

        expect(and.validatables[2].valid).toBe(true);
        expect(typeof and.validatables[2].message).toBe('string');

        // @ts-expect-error
        expect(and.validatables[3]).toBe(undefined);
    });


    it('or validation ', () => {

        const or = new Map.Parameters(value, validator,
            (value, validators) => Standard.Parameters(value, validators),
            (v)=>Or.Parameters(v), (v)=>MessageMap(v)
        );

        expect(or.valid).toBe(true);
        expect(or.value).toEqual(value);

        expect(typeof or.validatables[0].message).toBe('string');
        expect(or.validatables[0].valid).toBe(true);

        expect(typeof or.validatables[1].message).toBe('string');
        expect(or.validatables[1].valid).toBe(false);

        expect(typeof or.validatables[2].message).toBe('string');
        expect(or.validatables[2].valid).toBe(true);

        // @ts-expect-error
        expect(or.validatables[3]).toBe(undefined);

    });
});


describe('partial', function() {

    it('and validation', () => {

        const and = new Map.Parameters(value, validator,
            (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>PartialStandard.Parameters(value, validators),
            (v)=>And.Parameters(v), (v)=>MessageMap(v)
        );

        expect(and.valid).toBe(false);
        expect(and.value).toEqual(value);

        expect(and.validatables[0].valid).toBe(true);
        expect(typeof and.validatables[0].message).toBe('string');

        expect(and.validatables[1].valid).toBe(false);
        expect(typeof and.validatables[1].message).toBe('string');

        expect(and.validatables[2]).toBe(<any>undefined);
        expect(and.validatables[3]).toBe(<any>undefined);
    });


    it('or validation ', () => {

        const or = new Map.Parameters(value, validator,
            (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>PartialStandard.Parameters(value, validators),
            (v)=>Or.Parameters(v), (v)=>MessageMap(v)
        );

        expect(or.valid).toBe(true);
        expect(or.value).toEqual(value);

        expect(typeof or.validatables[0].message).toBe('string');
        expect(or.validatables[0].valid).toBe(true);

        expect(typeof or.validatables[1].message).toBe('string');
        expect(or.validatables[1].valid).toBe(false);

        expect(or.validatables[2]).toBe(<any>undefined);
        expect(or.validatables[3]).toBe(<any>undefined);

    });
});

