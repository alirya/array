import MapAll from '../../dist/validator/map-all.js';
import And from '../../dist/validatable/and.js';
import Or from '../../dist/validatable/or.js';
import Validatable from '@axiona/validatable/validatable.js';
import SimpleValidator from '@axiona/validator/simple.js';
import Validatables from '../../dist/validatable/validatables/validatables.js';
import ValidatablesInterface from '../../dist/validatable/validatables/validatables.js';
import MessageMap from '../../dist/message/message/list/map.js';
import {TypeParameters} from '@axiona/type/validator/type.js';
import Instance from '@axiona/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('implicit partial', function() {

        const validator = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        const value = [
            'name',
            'address',
        ];

        const property = MapAll.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

        const validatable = property(value);

        let key : Validatable;

        key = validatable.validatables[0];

        key = validatable.validatables[1];

        key = validatable.validatables[2];

        const validatables : ValidatablesInterface = validatable;

        const record : Validatable[] = validatable.validatables;

        const validatable1 : Validatables = validatable;

        const unknown : unknown = validatable.value;

        // @ts-expect-error
        const string : Type = validatable.value;

        it('recursive', function() {

            const validator = TypeParameters('string');
            const list1 = MapAll.Parameters([validator], And.Parameters, MessageMap);
            const list2 = MapAll.Parameters([list1], And.Parameters, MessageMap);
            const list3 = MapAll.Parameters([list2], And.Parameters, MessageMap);

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

            const property = MapAll.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

            const validatable = property(value);

            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];

            // @ts-expect-error
            key = validatable.validatables[2];

            const validatables : ValidatablesInterface = validatable;

            const record : Validatable[] = validatable.validatables;

            const validatable1 : Validatables = validatable;

            const unknown : unknown = validatable.value;

            const string : Type = validatable.value;

        });

        it('direct', function() {

            const property = MapAll.Parameters<TypeValidator>(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

            const validatable = property(value);


            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];
            // @ts-expect-error
            key = validatable.validatables[2];

            const validatables : ValidatablesInterface = validatable;

            const record : Validatable[] = validatable.validatables;

            const validatable1 : Validatables = validatable;

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

        const property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
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

        const property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        const property = MapAll.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
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

        const property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
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
            expect(validatable.validatables[2].valid).toBe(true);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 2 should exits');
        }

    });

    it(`check handler and`, () => {

        const property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        const property = MapAll.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
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

        const property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(false);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 1 should exits');
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(false);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 2 should not exits');
        }

        if(validatable.validatables[2]) {
            expect(validatable.validatables[2].valid).toBe(false);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 3 should not exits');
        }
    });

    it(`check handler and`, () => {

        const property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        const property = MapAll.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
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
            MapAll.Parameters([
                TypeParameters('number'),
                TypeParameters('number'),
            ], (v)=>And.Parameters(v), MessageMap)
        ];

        const value = [
            'user',
            'name',
            'address',
            [
                '1',
                '2'
            ]
        ];

        it(`check validate return`, () => {

            const property = MapAll.Parameters(validator,(v)=>And.Parameters(v), MessageMap);
            const validatable = property(value);

            if(validatable.validatables[0]) {
                expect(validatable.validatables[0].valid).toBe(false);
                expect(typeof validatable.validatables[0].message).toBe('string');
            } else {
                fail('index 1 should exits');
            }

            if(validatable.validatables[1]) {
                expect(validatable.validatables[1].valid).toBe(false);
                expect(typeof validatable.validatables[1].message).toBe('string');
            } else {
                fail('index 2 should not exits');
            }

            if(validatable.validatables[2]) {
                expect(validatable.validatables[2].valid).toBe(false);
                expect(typeof validatable.validatables[2].message).toBe('string');
            } else {
                fail('index 3 should not exits');
            }

            if(validatable.validatables[3]) {

                // @ts-expect-error
                if(validatable.validatables[3].validatables[0]) {
                     // @ts-expect-error
                    expect(validatable.validatables[3].validatables[0].valid).toBe(false);
                     // @ts-expect-error
                    expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');
                } else {
                    fail('index 3.0 should exits');
                }

                // @ts-expect-error
                if(validatable.validatables[3].validatables[1]) {
                     // @ts-expect-error
                    expect(validatable.validatables[3].validatables[1].valid).toBe(false);
                     // @ts-expect-error
                    expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');
                } else {
                    fail('index 3.1 should exits');
                }

                // @ts-expect-error
                if(validatable.validatables[3].validatables[2]) {
                    fail('index 3.2 should no exits');
                }


            } else {
                fail('index 3 should not exits');
            }
        });

    });
});
