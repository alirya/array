import Map from '../../../dist/validatable/map-callback-parameters';
import Standard from '../../../dist/validator/validatable/list/map-parameters';
import And from '../../../dist/validatable/and-parameters';
import Or from '../../../dist/validatable/or-parameters';
import ValidatorInterface from '@alirya/validator/simple';
import MessageMap from '../../../dist/message/message/list/map';
import ValidatorType from '@alirya/type/validator/type-parameters';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

type TypeValidator = [
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
];

let validator : TypeValidator = [
    ValidatorType('string'),
    ValidatorType('string'),
    ValidatorType('string'),
];

describe('valid', function() {

    type Type = [
        string,
        string,
        string,
    ];

    let value : Type = ['a', 'b', 'c'];

    describe('equal', function() {

        it(`and validation`, () => {

            let and = new Map(value, validator, Standard, And, MessageMap);

            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            let or = new Map(value, validator, Standard, Or, MessageMap);

            expect(value).toEqual(or.value);
        });
    });

    describe('more', function() {

        let more = [...value, []];

        it(`and validation`, () => {
            // @ts-expect-error
            let and = new Map(more, validator, Standard, And, MessageMap);

            expect(more).not.toEqual(and.value);
            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {
            // @ts-expect-error
            let or = new Map(more, validator, Standard, Or, MessageMap);

            expect(more).not.toEqual(or.value);
            expect(value).toEqual(or.value);
        });
    });

    describe('less', function() {

        let less = value.slice(0, value.length - 1);

        it(`and validation`, () => {

            // @ts-expect-error
            let and = new Map(less, validator, Standard, And, MessageMap);

            expect(less).toEqual(and.value);
            expect(value).not.toEqual(and.value);
        });

        it(`or validation `, () => {

            // @ts-expect-error
            let or = new Map(less, validator, Standard, Or, MessageMap);

            expect(less).toEqual(or.value);
            expect(value).not.toEqual(or.value);
        });
    });
});


describe('mixed', function() {

    type Type = [
        object,
        string,
        string,
    ];

    let value : Type = [{}, 'a', 'b'];

    describe('equal', function() {

        it(`and validation`, () => {

            let and = new Map(value, validator, Standard, And, MessageMap);

            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            let or = new Map(value, validator, Standard, Or, MessageMap);

            expect(value).toEqual(or.value);
        });
    });

    describe('more', function() {

        let more = [...value, []];

        it(`and validation`, () => {

            let and = new Map(value, validator, Standard, And, MessageMap);

            expect(more).not.toEqual(and.value);
            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            let or = new Map(value, validator, Standard, Or, MessageMap);

            expect(more).not.toEqual(or.value);
            expect(value).toEqual(or.value);
        });
    });
});


describe('invalid', function() {

    type Type = [
        object,
        object,
        object,
    ];

    let value : Type = [{}, {}, {}];

    describe('equal', function() {

        it(`and validation`, () => {

            let and = new Map(value, validator, Standard, And, MessageMap);

            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            let or = new Map(value, validator, Standard, Or, MessageMap);

            expect(value).toEqual(or.value);
        });
    });

    describe('more', function() {

        let more = [...value, []];

        it(`and validation`, () => {

            let and = new Map(value, validator, Standard, And, MessageMap);

            expect(more).not.toEqual(and.value);
            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            let or = new Map(value, validator, Standard, Or, MessageMap);

            expect(more).not.toEqual(or.value);
            expect(value).toEqual(or.value);
        });
    });
});

