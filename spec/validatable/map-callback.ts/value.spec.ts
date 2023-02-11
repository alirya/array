import Map from '../../../dist/validatable/map-callback.js';
import Standard from '../../../dist/validator/validatable/list/map.js';
import And from '../../../dist/validatable/and.js';
import Or from '../../../dist/validatable/or.js';
import ValidatorInterface from '@alirya/validator/simple.js';
import MessageMap from '../../../dist/message/message/list/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Instance from '@alirya/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

type TypeValidator = [
    ValidatorInterface<any, string, string>,
    ValidatorInterface<any, string, string>,
    ValidatorInterface<any, string, string>,
];

const validator : TypeValidator = [
    TypeParameters('string'),
    TypeParameters('string'),
    TypeParameters('string'),
];

describe('valid', function() {

    type Type = [
        string,
        string,
        string,
    ];

    const value : Type = ['a', 'b', 'c'];

    describe('equal', function() {

        it(`and validation`, () => {

            const and = new Map.Parameters(value, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            const or = new Map.Parameters(value, validator, Standard.Parameters, Or.Parameters, MessageMap);

            expect(value).toEqual(or.value);
        });
    });

    describe('more', function() {

        const more = [...value, []];

        it(`and validation`, () => {
            // @ts-expect-error
            const and = new Map.Parameters(more, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(more).not.toEqual(and.value);
            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {
            // @ts-expect-error
            const or = new Map.Parameters(more, validator, Standard.Parameters, Or.Parameters, MessageMap);

            expect(more).not.toEqual(or.value);
            expect(value).toEqual(or.value);
        });
    });

    describe('less', function() {

        const less = value.slice(0, value.length - 1);

        it(`and validation`, () => {

            // @ts-expect-error
            const and = new Map.Parameters(less, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(less).toEqual(and.value);
            expect(value).not.toEqual(and.value);
        });

        it(`or validation `, () => {

            // @ts-expect-error
            const or = new Map.Parameters(less, validator, Standard.Parameters, Or.Parameters, MessageMap);

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

    const value : Type = [{}, 'a', 'b'];

    describe('equal', function() {

        it(`and validation`, () => {

            const and = new Map.Parameters(value, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            const or = new Map.Parameters(value, validator, Standard.Parameters, Or.Parameters, MessageMap);

            expect(value).toEqual(or.value);
        });
    });

    describe('more', function() {

        const more = [...value, []];

        it(`and validation`, () => {

            const and = new Map.Parameters(value, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(more).not.toEqual(and.value);
            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            const or = new Map.Parameters(value, validator, Standard.Parameters, Or.Parameters, MessageMap);

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

    const value : Type = [{}, {}, {}];

    describe('equal', function() {

        it(`and validation`, () => {

            const and = new Map.Parameters(value, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            const or = new Map.Parameters(value, validator, Standard.Parameters, Or.Parameters, MessageMap);

            expect(value).toEqual(or.value);
        });
    });

    describe('more', function() {

        const more = [...value, []];

        it(`and validation`, () => {

            const and = new Map.Parameters(value, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(more).not.toEqual(and.value);
            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            const or = new Map.Parameters(value, validator, Standard.Parameters, Or.Parameters, MessageMap);

            expect(more).not.toEqual(or.value);
            expect(value).toEqual(or.value);
        });
    });
});

