import MapCallbackFunction from '../../dist/validator/map-callback.js';
import Standard from '../../dist/validator/validatable/list/map.js';
import MapPartial from '../../dist/validator/validatable/list/map-partial.js';
import And from '../../dist/validatable/and.js';
import Or from '../../dist/validatable/or.js';
import Validatable from '@alirya/validatable/validatable.js';
import SimpleValidator from '@alirya/validator/simple.js';
import Message from '@alirya/message/message.js';
import MessageMap from '../../dist/message/message/list/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Value from '@alirya/value/value.js';
import Instance from '@alirya/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('explicit typed', function() {

        type TypeValidator = [
            SimpleValidator<any, string, string>,
            SimpleValidator<any, string, string>,
        ];

        type Type = [
            string,
            string,
        ];

        const validators : TypeValidator = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        const value : Type = [
            'name',
            'address',
        ];

        describe('auto', function() {

            const validator = MapCallbackFunction.Parameters(validators,
                (value, validators) => Standard.Parameters(value, validators),
                And.Parameters, (v)=>MessageMap(v)
            );

            const validatable = validator(value);

            const unknown : unknown = validatable.value;

            const record : Type = validatable.value;

            let instance : Validatable;
            let message : Message;

            instance = validatable.validatables[0];
            instance = validatable.validatables[1];

            message = validatable.messages[0];
            message = validatable.messages[1];

            // @ts-expect-error
            instance = validatable.validatables[3];
            // @ts-expect-error
            message = validatable.messages[3];

            // @ts-expect-error
            instance = validatable.validatables[4];
            // @ts-expect-error
            message = validatable.messages[4];

            it('recursive', function() {

                const validator = TypeParameters('string');
                const list1 = MapCallbackFunction.Parameters([validator], (value, validators) => Standard.Parameters(value, validators), And.Parameters, MessageMap);
                const list2 = MapCallbackFunction.Parameters([list1], (value, validators) => Standard.Parameters(value, validators), And.Parameters, MessageMap);
                const list3 = MapCallbackFunction.Parameters([list2], (value, validators) => Standard.Parameters(value, validators), And.Parameters, MessageMap);

            });
        });

        it('auto partial', function() {

            const validator = MapCallbackFunction.Parameters(validators,
                (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                And.Parameters, (v)=>MessageMap(v)
            );

            const validatable = validator(value);

            const unknown : unknown = validatable.value;
            const string : Type = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];

            let message : Message;
            message = validatable.messages[0];
            message = validatable.messages[1];
            message = validatable.messages[3];
            message = validatable.messages[4];
        });
    });


    describe('explicit typed', function() {

        const validators  = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        const value  = [
            'name',
            'address',
        ];


        it('auto', function() {

            const validator = MapCallbackFunction.Parameters(validators,
                (value, validators) => Standard.Parameters(value, validators),
                And.Parameters, (v)=>MessageMap(v)
            );

            const validatable = validator(value);

            const unknown : unknown = validatable.value;

            const value1 : string[] = validatable.value;

            // @ts-expect-error
            const value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];

            let message : Message;
            message = validatable.messages[0];
            message = validatable.messages[1];
            message = validatable.messages[3];
            message = validatable.messages[4];
        });

        it('auto partial', function() {

            const validator = MapCallbackFunction.Parameters(validators,
                (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                And.Parameters, (v)=>MessageMap(v)
            );
            const validatable = validator(value);

            const unknown : unknown = validatable.value;

            const value1 : string[] = validatable.value;

            // @ts-expect-error
            const value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];

            let message : Message;
            message = validatable.messages[0];
            message = validatable.messages[1];
            message = validatable.messages[3];
            message = validatable.messages[4];
        });
    });
});


describe('explicit', function() {

    describe('all valid', function() {

        type TypeValidator = [
            SimpleValidator<any, string, string>,
            SimpleValidator<any, string, string>,
            SimpleValidator<any, string, string>,
        ];

        type Type = [
            string,
            string,
            string,
        ];

        const validators : TypeValidator = [
            TypeParameters('string'),
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        const value : Type = [
            'user',
            'name',
            'address',
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    And.Parameters, (v)=>MessageMap(v)
                );
                const validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
                // @ts-expect-error
                expect(validatable.message[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    Or.Parameters, (v)=>MessageMap(v)
                );

                const validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
                // @ts-expect-error
                expect(validatable.message[3]).toBe(undefined);
            });

        });

        describe('partial', function() {

            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    And.Parameters, (v)=>MessageMap(v)
                );

                const validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
                // @ts-expect-error
                expect(validatable.message[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    Or.Parameters, (v)=>MessageMap(v)
                );

                const validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
                // @ts-expect-error
                expect(validatable.message[3]).toBe(undefined);
            });
        });

    });

    describe('mixed', function() {


        type TypeValidator = [
            SimpleValidator<any, string, string>,
            SimpleValidator<any, number, string>,
            SimpleValidator<any, string, string>,
        ];

        type Type = [
            string,
            string,
            string,
        ];

        const validators : TypeValidator= [
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

            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const and = validator(value);

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(typeof and.validatables[0].message).toBe('string');
                expect(and.message[0]).toBe(and.validatables[0].message);

                expect(and.validatables[1].valid).toBe(false);
                expect(typeof and.validatables[1].message).toBe('string');
                expect(and.message[1]).toBe(and.validatables[1].message);

                expect(and.validatables[2].valid).toBe(true);
                expect(typeof and.validatables[2].message).toBe('string');
                expect(and.message[2]).toBe(and.validatables[2].message);

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
                // @ts-expect-error
                expect(and.message[3]).toBe(undefined);
            });


            it(`or validation `, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const or = validator(value);

                expect(or.valid).toBe(true);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(true);

                expect(typeof or.validatables[1].message).toBe('string');
                expect(or.message[1]).toBe(or.validatables[1].message);
                expect(or.validatables[1].valid).toBe(false);

                expect(typeof or.validatables[2].message).toBe('string');
                expect(or.message[2]).toBe(or.validatables[2].message);
                expect(or.validatables[2].valid).toBe(true);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);
                // @ts-expect-error
                expect(or.message[3]).toBe(undefined);

            });
        });


        describe('partial', function() {

            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const and = validator(value);

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(typeof and.validatables[0].message).toBe('string');
                expect(and.message[0]).toBe(and.validatables[0].message);

                expect(and.validatables[1].valid).toBe(false);
                expect(typeof and.validatables[1].message).toBe('string');
                expect(and.message[1]).toBe(and.validatables[1].message);

                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);

                expect(and.message[2]).toBe(<any>undefined);
                expect(and.message[3]).toBe(<any>undefined);
            });


            it(`or validation `, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const or = validator(value);

                expect(or.valid).toBe(true);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(true);

                expect(typeof or.validatables[1].message).toBe('string');
                expect(or.message[1]).toBe(or.validatables[1].message);
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2]).toBe(<any>undefined);
                expect(or.validatables[3]).toBe(<any>undefined);
                expect(or.message[2]).toBe(<any>undefined);
                expect(or.message[3]).toBe(<any>undefined);

            });
        });
    });

    describe('all invalid', function() {

        type TypeValidator = [
            SimpleValidator<any, string, string>,
            SimpleValidator<any, number, string>,
            SimpleValidator<any, string, string>,
        ];

        type Type = [
            object,
            object,
            object,
        ];

        const validators : TypeValidator = [
            TypeParameters('string'),
            TypeParameters('number'),
            TypeParameters('string'),
        ];

        const value : Type = [{}, {}, {}];

        describe('complete', function() {
            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const and = validator(value);

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(typeof and.validatables[0].message).toBe('string');
                expect(and.message[0]).toBe(and.validatables[0].message);
                expect(and.validatables[0].valid).toBe(false);

                expect(typeof and.validatables[1].message).toBe('string');
                expect(and.message[1]).toBe(and.validatables[1].message);
                expect(and.validatables[1].valid).toBe(false);

                expect(typeof and.validatables[2].message).toBe('string');
                expect(and.message[2]).toBe(and.validatables[2].message);
                expect(and.validatables[2].valid).toBe(false);

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
                // @ts-expect-error
                expect(and.message[3]).toBe(undefined);
            });

            it(`or validation `, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const or = validator(value);

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(false);

                expect(typeof or.validatables[1].message).toBe('string');
                expect(or.message[1]).toBe(or.validatables[1].message);
                expect(or.validatables[1].valid).toBe(false);

                expect(typeof or.validatables[2].message).toBe('string');
                expect(or.message[2]).toBe(or.validatables[2].message);
                expect(or.validatables[2].valid).toBe(false);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);
                // @ts-expect-error
                expect(or.message[3]).toBe(undefined);
            });
        });


        describe('partial', function() {
            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );
                const and = validator(value);

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(false);
                expect(typeof and.validatables[0].message).toBe('string');
                expect(and.message[0]).toBe(and.validatables[0].message);

                expect(and.validatables[1]).toBe(<any>undefined);
                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);

                expect(and.message[1]).toBe(<any>undefined);
                expect(and.message[2]).toBe(<any>undefined);
                expect(and.message[3]).toBe(<any>undefined);
            });

            it(`or validation `, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );
                const or = validator(value);

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(false);

                expect(or.validatables[1]).toBe(<any>undefined);
                expect(or.validatables[2]).toBe(<any>undefined);
                expect(or.validatables[3]).toBe(<any>undefined);

                expect(or.message[1]).toBe(<any>undefined);
                expect(or.message[2]).toBe(<any>undefined);
                expect(or.message[3]).toBe(<any>undefined);
            });
        });
    });
});


describe('recursive', function() {

    describe('all valid', function() {

        const validators = [
            TypeParameters('string'),
            TypeParameters('string'),
            TypeParameters('string'),
            MapCallbackFunction.Parameters([
                TypeParameters('string'),
                TypeParameters('string'),
            ], (value, validators) => Standard.Parameters(value, validators),
                And.Parameters, (v)=>MessageMap(v)
            )
        ];

        const value = [
            'user',
            'name',
            'address',
            [
                'name',
                'address',
            ]
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    And.Parameters, (v)=>MessageMap(v)
                );
                const validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);

                // @ts-expect-error
                expect(validatable.validatables[3].validatables[0].valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');
                // @ts-expect-error
                expect(validatable.validatables[3].validatables[0].value).toBe('name');

                // @ts-expect-error
                expect(validatable.validatables[3].validatables[1].valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');
                // @ts-expect-error
                expect(validatable.validatables[3].validatables[1].value).toBe('address');
            });

            it(`or validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    Or.Parameters, (v)=>MessageMap(v)
                );

                const validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);

                // @ts-expect-error
                expect(validatable.validatables[3].validatables[0].valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');
                // @ts-expect-error
                expect(validatable.validatables[3].validatables[0].value).toBe('name');

                // @ts-expect-error
                expect(validatable.validatables[3].validatables[1].valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');
                // @ts-expect-error
                expect(validatable.validatables[3].validatables[1].value).toBe('address');
            });

        });

        describe('partial', function() {

            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    And.Parameters, (v)=>MessageMap(v)
                );

                const validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);

                // @ts-expect-error
                expect(validatable.validatables[3].validatables[0].valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');
                // @ts-expect-error
                expect(validatable.validatables[3].validatables[0].value).toBe('name');

                // @ts-expect-error
                expect(validatable.validatables[3].validatables[1].valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');
                // @ts-expect-error
                expect(validatable.validatables[3].validatables[1].value).toBe('address');
            });

            it(`or validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    Or.Parameters, (v)=>MessageMap(v)
                );

                const validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);

                // @ts-expect-error
                expect(validatable.validatables[3].validatables[0].valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');
                // @ts-expect-error
                expect(validatable.validatables[3].validatables[0].value).toBe('name');

                // @ts-expect-error
                expect(validatable.validatables[3].validatables[1].valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');
                // @ts-expect-error
                expect(validatable.validatables[3].validatables[1].value).toBe('address');
            });
        });

    });

    describe('mixed', function() {

        const validators = [
            TypeParameters('string'),
            TypeParameters('number'),
            TypeParameters('string'),
            MapCallbackFunction.Parameters([
                TypeParameters('string'),
                TypeParameters('number'),
            ], (value, validators) => Standard.Parameters(value, validators), And.Parameters, MessageMap)
        ];

        const value = [
            '11',
            'name',
            'address',
            [
                'data1',
                'data2'
            ]
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators, Standard.Parameters, And.Parameters, MessageMap);

                const and = validator(value);

                expect<boolean>(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(typeof and.validatables[0].message).toBe('string');
                expect(typeof and.message[0]).toBe('string');

                expect(and.validatables[1].valid).toBe(false);
                expect(typeof and.validatables[1].message).toBe('string');
                expect(typeof and.message[1]).toBe('string');

                expect(and.validatables[2].valid).toBe(true);
                expect(typeof and.validatables[2].message).toBe('string');
                expect(typeof and.message[2]).toBe('string');

                // @ts-expect-error
                expect(and.validatables[3].validatables[0].valid).toBe(true);
                // @ts-expect-error
                expect(typeof and.validatables[3].validatables[0].message).toBe('string');
                // @ts-expect-error
                expect(and.validatables[3].validatables[0].value).toBe('data1');

                // @ts-expect-error
                expect(and.validatables[3].validatables[1].valid).toBe(false);
                // @ts-expect-error
                expect(typeof and.validatables[3].validatables[1].message).toBe('string');
                // @ts-expect-error
                expect(and.validatables[3].validatables[1].value).toBe('data2');
            });


            it(`or validation `, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const or = validator(value);

                expect(or.valid).toBe(true);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(true);

                expect(typeof or.validatables[1].message).toBe('string');
                expect(or.message[1]).toBe(or.validatables[1].message);
                expect(or.validatables[1].valid).toBe(false);

                expect(typeof or.validatables[2].message).toBe('string');
                expect(or.message[2]).toBe(or.validatables[2].message);
                expect(or.validatables[2].valid).toBe(true);

                // @ts-expect-error
                expect(or.validatables[3].validatables[0].valid).toBe(true);
                // @ts-expect-error
                expect(typeof or.validatables[3].validatables[0].message).toBe('string');
                // @ts-expect-error
                expect(or.validatables[3].validatables[0].value).toBe('data1');

                // @ts-expect-error
                expect(or.validatables[3].validatables[1].valid).toBe(false);
                // @ts-expect-error
                expect(typeof or.validatables[3].validatables[1].message).toBe('string');
                // @ts-expect-error
                expect(or.validatables[3].validatables[1].value).toBe('data2');

            });
        });


        describe('partial', function() {

            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const and = validator(value);

                expect<boolean>(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(typeof and.validatables[0].message).toBe('string');
                expect(and.message[0]).toBe(and.validatables[0].message);

                expect(and.validatables[1].valid).toBe(false);
                expect(typeof and.validatables[1].message).toBe('string');
                expect(and.message[1]).toBe(and.validatables[1].message);

                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);
            });


            it(`or validation `, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const or = validator(value);

                expect(or.valid).toBe(true);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(true);

                expect(typeof or.validatables[1].message).toBe('string');
                expect(or.message[1]).toBe(or.validatables[1].message);
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2]).toBe(<any>undefined);
                expect(or.message[2]).toBe(<any>undefined);

                expect(or.validatables[3]).toBe(<any>undefined);
                expect(or.message[3]).toBe(<any>undefined);
            });
        });
    });

    describe('all invalid', function() {

        const validators  = [
            TypeParameters('string'),
            TypeParameters('number'),
            TypeParameters('string'),
            MapCallbackFunction.Parameters([
                TypeParameters('string'),
                TypeParameters('number'),
            ], (value, validators) => Standard.Parameters(value, validators), And.Parameters, MessageMap)

        ];

        const value = [{}, {}, {}, [{}, {}]];

        describe('complete', function() {
            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const and = validator(value);

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(typeof and.validatables[0].message).toBe('string');
                expect(and.message[0]).toBe(and.validatables[0].message);
                expect(and.validatables[0].valid).toBe(false);

                expect(typeof and.validatables[1].message).toBe('string');
                expect(and.message[1]).toBe(and.validatables[1].message);
                expect(and.validatables[1].valid).toBe(false);

                expect(typeof and.validatables[2].message).toBe('string');
                expect(and.message[2]).toBe(and.validatables[2].message);
                expect(and.validatables[2].valid).toBe(false);

               // @ts-expect-error
                expect(and.validatables[3].validatables[0].valid).toBe(false);
               // @ts-expect-error
                expect(typeof and.validatables[3].validatables[0].message).toBe('string');
               // @ts-expect-error
                expect(and.validatables[3].validatables[0].value).toEqual({});

               // @ts-expect-error
                expect(and.validatables[3].validatables[1].valid).toBe(false);
               // @ts-expect-error
                expect(typeof and.validatables[3].validatables[1].message).toBe('string');
               // @ts-expect-error
                expect(and.validatables[3].validatables[1].value).toEqual({});
            });

            it(`or validation `, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );

                const or = validator(value);

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(false);

                expect(typeof or.validatables[1].message).toBe('string');
                expect(or.message[1]).toBe(or.validatables[1].message);
                expect(or.validatables[1].valid).toBe(false);

                expect(typeof or.validatables[2].message).toBe('string');
                expect(or.message[2]).toBe(or.validatables[2].message);
                expect(or.validatables[2].valid).toBe(false);

               // @ts-expect-error
                expect(or.validatables[3].validatables[0].valid).toBe(false);
               // @ts-expect-error
                expect(typeof or.validatables[3].validatables[0].message).toBe('string');
               // @ts-expect-error
                expect(or.validatables[3].validatables[0].value).toEqual({});

               // @ts-expect-error
                expect(or.validatables[3].validatables[1].valid).toBe(false);
               // @ts-expect-error
                expect(typeof or.validatables[3].validatables[1].message).toBe('string');
               // @ts-expect-error
                expect(or.validatables[3].validatables[1].value).toEqual({});
            });
        });


        describe('partial', function() {
            it(`and validation`, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );
                const and = validator(value);

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(false);
                expect(typeof and.validatables[0].message).toBe('string');
                expect(and.message[0]).toBe(and.validatables[0].message);

                expect(and.validatables[1]).toBe(<any>undefined);
                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);

                expect(and.message[1]).toBe(<any>undefined);
                expect(and.message[2]).toBe(<any>undefined);
                expect(and.message[3]).toBe(<any>undefined);
            });

            it(`or validation `, () => {

                const validator = MapCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );
                const or = validator(value);

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(false);

                expect(or.validatables[1]).toBe(<any>undefined);
                expect(or.validatables[2]).toBe(<any>undefined);
                expect(or.validatables[3]).toBe(<any>undefined);

                expect(or.message[1]).toBe(<any>undefined);
                expect(or.message[2]).toBe(<any>undefined);
                expect(or.message[3]).toBe(<any>undefined);

            });
        });
    });
});
