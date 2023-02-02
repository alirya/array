import MapAll from '../../dist/validator/map-all';
import And from '../../dist/validatable/and';
import Or from '../../dist/validatable/or';
import Validatable from '@alirya/validatable/validatable';
import SimpleValidator from '@alirya/validator/simple';
import Validatables from '../../dist/validatable/validatables/validatables';
import ValidatablesInterface from '../../dist/validatable/validatables/validatables';
import MessageMap from '../../dist/message/message/list/map';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('implicit partial', function() {

        let validator = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        let value = [
            'name',
            'address',
        ];

        let property = MapAll.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

        let validatable = property(value);

        let key : Validatable;

        key = validatable.validatables[0];

        key = validatable.validatables[1];

        key = validatable.validatables[2];

        let validatables : ValidatablesInterface = validatable;

        let record : Validatable[] = validatable.validatables;

        let validatable1 : Validatables = validatable;

        let unknown : unknown = validatable.value;

        // @ts-expect-error
        let string : Type = validatable.value;

        it('recursive', function() {

            let validator = TypeParameters('string');
            let list1 = MapAll.Parameters([validator], And.Parameters, MessageMap);
            let list2 = MapAll.Parameters([list1], And.Parameters, MessageMap);
            let list3 = MapAll.Parameters([list2], And.Parameters, MessageMap);

        });
    });

    describe('explicit complete', function() {


        type TypeValidator = [
            SimpleValidator<any, string, string>,
            SimpleValidator<any, string, string>,
        ];

        let validator : TypeValidator = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        type Type = [
            string,
            string,
        ];

        let value : Type = [
            'name',
            'address',
        ];

        it('auto', function() {

            let property = MapAll.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

            let validatable = property(value);

            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];

            // @ts-expect-error
            key = validatable.validatables[2];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;

        });

        it('direct', function() {

            let property = MapAll.Parameters<TypeValidator>(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

            let validatable = property(value);


            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];
            // @ts-expect-error
            key = validatable.validatables[2];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;
        });
    });
});




describe('all valid', function() {

    let validator = [
        TypeParameters('string'),
        TypeParameters('string'),
        TypeParameters('string'),
    ];

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

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

        let property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = MapAll.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

});

describe('mixed', function() {

    let validator = [
        TypeParameters('string'),
        TypeParameters('number'),
        TypeParameters('string'),
    ];

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

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

        let property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = MapAll.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

});

describe('all invalid', function() {

    let validator = [
        TypeParameters('number'),
        TypeParameters('number'),
        TypeParameters('number'),
    ];

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

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

        let property = MapAll.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = MapAll.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

});



describe('recursive', function() {

    describe('all invalid', function() {

        let validator = [
            TypeParameters('number'),
            TypeParameters('number'),
            TypeParameters('number'),
            MapAll.Parameters([
                TypeParameters('number'),
                TypeParameters('number'),
            ], (v)=>And.Parameters(v), MessageMap)
        ];

        let value = [
            'user',
            'name',
            'address',
            [
                '1',
                '2'
            ]
        ];

        it(`check validate return`, () => {

            let property = MapAll.Parameters(validator,(v)=>And.Parameters(v), MessageMap);
            let validatable = property(value);

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
