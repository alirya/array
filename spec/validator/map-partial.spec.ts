import MapPartial from '../../dist/validator/map-partial';
import And from '../../dist/validatable/and';
import Or from '../../dist/validatable/or';
import Validatable from '@alirya/validatable/validatable';
import SimpleValidator from '@alirya/validator/simple';
import Validatables from '../../dist/validatable/validatables/validatables';
import MessageMap from '../../dist/message/message/list/map';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {


    describe('implicit partial', function() {

        let validator = [
            TypeParameters('string'), // new Validator('string'),
            TypeParameters('string'), // new Validator('string'),
        ];

        let value = [
            'name',
            'address',
        ];

        let property = MapPartial.Parameters(validator, (v)=>And.Parameters(v), MessageMap);

        let validatable = property(value);

        let key : Validatable;

        key = validatable.validatables[0];
        key = validatable.validatables[1];
        key = validatable.validatables[2];

        let validatables : Validatables = validatable;

        let record : Validatable[] = validatable.validatables;

        let validatable1 : Validatables<Validatable[]> = validatable;

        let unknown : unknown = validatable.value;

        // @ts-expect-error
        let string : Type = validatable.value;

        it('recursive', function() {

            let validator = TypeParameters('string');
            let list1 = MapPartial.Parameters([validator], And.Parameters, MessageMap);
            let list2 = MapPartial.Parameters([list1], And.Parameters, MessageMap);
            // @ts-expect-errors
            let list3 = MapPartial.Parameters([list2], And.Parameters, MessageMap);

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

            let property = MapPartial.Parameters(validator, And.Parameters, MessageMap);

            let validatable = property(value);

            let key : Validatable;

            key = validatable.validatables[0];
            key = validatable.validatables[1];
            key = validatable.validatables[2];

            let validatables : Validatables = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables<Validatable[]> = validatable;

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;

        });

        it('direct', function() {

            let property = MapPartial.Parameters<TypeValidator>(validator, (v)=>And.Parameters(v), MessageMap);

            let validatable = property(<any>value);


            let key : Validatable;
            key = validatable.validatables[0];
            key = validatable.validatables[1];
            key = validatable.validatables[2];

            let validatables : Validatables = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables<Validatable[]> = validatable;

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

        let property = MapPartial.Parameters(validator,(v)=>And.Parameters(v), MessageMap);
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

        let property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = MapPartial.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
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

        let property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
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
            fail('index 2 should not exits');
        }
    });

    it(`check handler and`, () => {

        let property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = MapPartial.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
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

        let property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

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

        let property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = MapPartial.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
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
            MapPartial.Parameters([
                TypeParameters('number'),
                TypeParameters('number')
            ],(v)=>And.Parameters(<Validatable[]>v), MessageMap)
        ];

        let value = [
            'user',
            'name',
            'address',
            [
                'data',
                'data'
            ]
        ];

        it(`check validate return`, () => {

            let property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
            let validatable = property(value);

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

            let property = MapPartial.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
            let validatable = property(value);

            expect(validatable.valid).toBe(false);
            expect(validatable.value).toEqual(value);
        });

        it(`check handler or`, () => {

            let property = MapPartial.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
            let validatable = property(value);

            expect(validatable.valid).toBe(false);
            expect(validatable.value).toEqual(value);
        });

    });
});
