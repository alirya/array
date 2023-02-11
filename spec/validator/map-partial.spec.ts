import MapPartial from '../../dist/validator/map-partial.js';
import And from '../../dist/validatable/and.js';
import Or from '../../dist/validatable/or.js';
import Validatable from '@alirya/validatable/validatable.js';
import SimpleValidator from '@alirya/validator/simple.js';
import Validatables from '../../dist/validatable/validatables/validatables.js';
import MessageMap from '../../dist/message/message/list/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Instance from '@alirya/validator/validatable/validatable.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {


    describe('implicit partial', function() {

        const validator = [
            TypeParameters('string'), // new Validator('string'),
            TypeParameters('string'), // new Validator('string'),
        ];

        const value = [
            'name',
            'address',
        ];

        const property = MapPartial.Parameters(validator, (v)=>And.Parameters(v), MessageMap);

        const validatable = property(value);

        let key : Validatable;

        key = validatable.validatables[0];
        key = validatable.validatables[1];
        key = validatable.validatables[2];

        const validatables : Validatables = validatable;

        const record : Validatable[] = validatable.validatables;

        const validatable1 : Validatables<Validatable[]> = validatable;

        const unknown : unknown = validatable.value;

        // @ts-expect-error
        const string : Type = validatable.value;

        it('recursive', function() {

            const validator = TypeParameters('string');
            const list1 = MapPartial.Parameters([validator], And.Parameters, MessageMap);
            const list2 = MapPartial.Parameters([list1], And.Parameters, MessageMap);
            // // @ts-expect-errors
            const list3 = MapPartial.Parameters([list2], And.Parameters, MessageMap);

        });
    });

    describe('explicit complete', function() {


        type TypeValidator = [
            SimpleValidator<any, string, string>,
            SimpleValidator<any, string, string>,
        ];

        const validator : TypeValidator = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        type Type = [
            string,
            string,
        ];

        const value : Type = [
            'name',
            'address',
        ];

        it('auto', function() {

            const property = MapPartial.Parameters(validator, And.Parameters, MessageMap);

            const validatable = property(value);

            let key : Validatable;

            key = validatable.validatables[0];
            key = validatable.validatables[1];
            key = validatable.validatables[2];

            const validatables : Validatables = validatable;

            const record : Validatable[] = validatable.validatables;

            const validatable1 : Validatables<Validatable[]> = validatable;

            const unknown : unknown = validatable.value;

            const string : Type = validatable.value;

        });

        it('direct', function() {

            const property = MapPartial.Parameters<TypeValidator>(validator, (v)=>And.Parameters(v), MessageMap);

            const validatable = property(<any>value);


            let key : Validatable;
            key = validatable.validatables[0];
            key = validatable.validatables[1];
            key = validatable.validatables[2];

            const validatables : Validatables = validatable;

            const record : Validatable[] = validatable.validatables;

            const validatable1 : Validatables<Validatable[]> = validatable;

            const unknown : unknown = validatable.value;

            const string : Type = validatable.value;
        });
    });
});




describe('all valid', function() {

    const validator = [
        TypeParameters('string'),
        TypeParameters('string'),
        TypeParameters('string'),
    ];

    const value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        const property = MapPartial.Parameters(validator,(v)=>And.Parameters(v), MessageMap);
        const validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 0 should exits');
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(true);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 1 should exits');
        }

        if(validatable.validatables[2]) {
            expect(validatable.validatables[2].valid).toBe(true);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 2 should exits');
        }
    });

    it(`check handler and`, () => {

        const property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        const property = MapPartial.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

});

describe('mixed', function() {

    const validator = [
        TypeParameters('string'),
        TypeParameters('number'),
        TypeParameters('string'),
    ];

    const value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        const property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 0 should exits');
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(false);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 1 should exits');
        }

        if(validatable.validatables[2]) {
            fail('index 2 should not exits');
        }
    });

    it(`check handler and`, () => {

        const property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        const property = MapPartial.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

});

describe('all invalid', function() {

    const validator = [
        TypeParameters('number'),
        TypeParameters('number'),
        TypeParameters('number'),
    ];

    const value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        const property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(false);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 1 should exits');
        }

        if(validatable.validatables[2]) {
            fail('index 2 should not exits');
        }

        if(validatable.validatables[2]) {
            fail('index 3 should not exits');
        }
    });

    it(`check handler and`, () => {

        const property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        const property = MapPartial.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

});


describe('recursive', function() {

    describe('all invalid', function() {

        const validator = [
            TypeParameters('number'),
            TypeParameters('number'),
            TypeParameters('number'),
            MapPartial.Parameters([
                TypeParameters('number'),
                TypeParameters('number')
            ],(v)=>And.Parameters(<Validatable[]>v), MessageMap)
        ];

        const value = [
            'user',
            'name',
            'address',
            [
                'data',
                'data'
            ]
        ];

        it(`check validate return`, () => {

            const property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
            const validatable = property(value);

            if(validatable.validatables[0]) {
                expect(validatable.validatables[0].valid).toBe(false);
                expect(typeof validatable.validatables[0].message).toBe('string');
            } else {
                fail('index 1 should exits');
            }

            if(validatable.validatables[2]) {
                fail('index 2 should not exits');
            }

            if(validatable.validatables[2]) {
                fail('index 3 should not exits');
            }
        });

        it(`check handler and`, () => {

            const property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
            const validatable = property(value);

            expect(validatable.valid).toBe(false);
            expect(validatable.value).toEqual(value);
        });

        it(`check handler or`, () => {

            const property = MapPartial.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
            const validatable = property(value);

            expect(validatable.valid).toBe(false);
            expect(validatable.value).toEqual(value);
        });

    });
});
