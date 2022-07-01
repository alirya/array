import Map from '../../../dist/validatable/map-callback';
import Standard from '../../../dist/validator/validatable/list/map';
import And from '../../../dist/validatable/and';
import Or from '../../../dist/validatable/or';
import ValidatorInterface from '@alirya/validator/simple';
import MessageMap from '../../../dist/message/message/list/map';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

type TypeValidator = [
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
];

let validator : TypeValidator = [
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

    let value : Type = ['a', 'b', 'c'];

    describe('equal', function() {

        it(`and validation`, () => {

            let and = new Map.Parameters(value, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            let or = new Map.Parameters(value, validator, Standard.Parameters, Or.Parameters, MessageMap);

            expect(value).toEqual(or.value);
        });
    });

    describe('more', function() {

        let more = [...value, []];

        it(`and validation`, () => {
            // @ts-expect-error
            let and = new Map.Parameters(more, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(more).not.toEqual(and.value);
            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {
            // @ts-expect-error
            let or = new Map.Parameters(more, validator, Standard.Parameters, Or.Parameters, MessageMap);

            expect(more).not.toEqual(or.value);
            expect(value).toEqual(or.value);
        });
    });

    describe('less', function() {

        let less = value.slice(0, value.length - 1);

        it(`and validation`, () => {

            // @ts-expect-error
            let and = new Map.Parameters(less, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(less).toEqual(and.value);
            expect(value).not.toEqual(and.value);
        });

        it(`or validation `, () => {

            // @ts-expect-error
            let or = new Map.Parameters(less, validator, Standard.Parameters, Or.Parameters, MessageMap);

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

            let and = new Map.Parameters(value, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            let or = new Map.Parameters(value, validator, Standard.Parameters, Or.Parameters, MessageMap);

            expect(value).toEqual(or.value);
        });
    });

    describe('more', function() {

        let more = [...value, []];

        it(`and validation`, () => {

            let and = new Map.Parameters(value, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(more).not.toEqual(and.value);
            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            let or = new Map.Parameters(value, validator, Standard.Parameters, Or.Parameters, MessageMap);

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

            let and = new Map.Parameters(value, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            let or = new Map.Parameters(value, validator, Standard.Parameters, Or.Parameters, MessageMap);

            expect(value).toEqual(or.value);
        });
    });

    describe('more', function() {

        let more = [...value, []];

        it(`and validation`, () => {

            let and = new Map.Parameters(value, validator, Standard.Parameters, And.Parameters, MessageMap);

            expect(more).not.toEqual(and.value);
            expect(value).toEqual(and.value);
        });

        it(`or validation `, () => {

            let or = new Map.Parameters(value, validator, Standard.Parameters, Or.Parameters, MessageMap);

            expect(more).not.toEqual(or.value);
            expect(value).toEqual(or.value);
        });
    });
});

