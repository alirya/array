import MapCallbackFunction from '../../dist/validator/map-callback-parameters';
import Standard from '../../dist/validator/validatable/list/map-parameters';
import MapPartial from '../../dist/validator/validatable/list/map-partial-parameters';
import And from '../../dist/validatable/and-parameters';
import Or from '../../dist/validatable/or-parameters';
import Validatable from '@alirya/validatable/validatable';
import SimpleValidator from '@alirya/validator/simple';
import Message from '@alirya/message/message';
import MessageMap from '../../dist/message/message/list/map';
import ValidatorType from '@alirya/type/validator/type-parameters';
import Value from '@alirya/value/value';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('explicit typed', function() {

        type TypeValidator = [
            SimpleValidator<any, string, Instance<any, string>>,
            SimpleValidator<any, string, Instance<any, string>>,
        ];

        type Type = [
            string,
            string,
        ];

        let validators : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        let value : Type = [
            'name',
            'address',
        ];

        describe('auto', function() {

            let validator = MapCallbackFunction(validators,
                (value, validators) => Standard(value, validators),
                And, (v)=>MessageMap(v)
            );

            let validatable = validator(value);

            let unknown : unknown = validatable.value;

            let record : Type = validatable.value;

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

            describe('recursive', function() {

                let validator = ValidatorType('string');
                let list1 = MapCallbackFunction([validator], (value, validators) => Standard(value, validators), And, MessageMap);
                let list2 = MapCallbackFunction([list1], (value, validators) => Standard(value, validators), And, MessageMap);
                let list3 = MapCallbackFunction([list2], (value, validators) => Standard(value, validators), And, MessageMap);

            });
        });

        describe('auto partial', function() {

            let validator = MapCallbackFunction(validators,
                (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                And, (v)=>MessageMap(v)
            );

            let validatable = validator(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

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

        let validators  = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        let value  = [
            'name',
            'address',
        ];


        describe('auto', function() {

            let validator = MapCallbackFunction(validators,
                (value, validators) => Standard(value, validators),
                And, (v)=>MessageMap(v)
            );

            let validatable = validator(value);

            let unknown : unknown = validatable.value;

            let value1 : string[] = validatable.value;

            // @ts-expect-error
            let value2 : [string, string] = validatable.value;

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

        describe('auto partial', function() {

            let validator = MapCallbackFunction(validators,
                (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                And, (v)=>MessageMap(v)
            );
            let validatable = validator(value);

            let unknown : unknown = validatable.value;

            let value1 : string[] = validatable.value;

            // @ts-expect-error
            let value2 : [string, string] = validatable.value;

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
            SimpleValidator<any, string, Instance<any, string>>,
            SimpleValidator<any, string, Instance<any, string>>,
            SimpleValidator<any, string, Instance<any, string>>,
        ];

        type Type = [
            string,
            string,
            string,
        ];

        let validators : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        let value : Type = [
            'user',
            'name',
            'address',
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    And, (v)=>MessageMap(v)
                );
                let validatable = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    Or, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    And, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    Or, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

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
            SimpleValidator<any, string, Instance<any, string>>,
            SimpleValidator<any, number, Instance<any, string>>,
            SimpleValidator<any, string, Instance<any, string>>,
        ];

        type Type = [
            string,
            string,
            string,
        ];

        let validators : TypeValidator= [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
        ];

        let value : Type = [
            '11',
            'name',
            'address',
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );

                let and = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    (v)=>Or(v),
                    (v)=>MessageMap(v)
                );

                let or = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );

                let and = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    (v)=>Or(v),
                    (v)=>MessageMap(v)
                );

                let or = validator(value);

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
            SimpleValidator<any, string, Instance<any, string>>,
            SimpleValidator<any, number, Instance<any, string>>,
            SimpleValidator<any, string, Instance<any, string>>,
        ];

        type Type = [
            object,
            object,
            object,
        ];

        let validators : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
        ];

        let value : Type = [{}, {}, {}];

        describe('complete', function() {
            it(`and validation`, () => {

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );

                let and = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    (v)=>Or(v),
                    (v)=>MessageMap(v)
                );

                let or = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );
                let and = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    (v)=>Or(v),
                    (v)=>MessageMap(v)
                );
                let or = validator(value);

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

        let validators = [
            ValidatorType('string'),
            ValidatorType('string'),
            ValidatorType('string'),
            MapCallbackFunction([
                ValidatorType('string'),
                ValidatorType('string'),
            ], (value, validators) => Standard(value, validators),
                And, (v)=>MessageMap(v)
            )
        ];

        let value = [
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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    And, (v)=>MessageMap(v)
                );
                let validatable = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    Or, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    And, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    Or, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

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

        let validators = [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
            MapCallbackFunction([
                ValidatorType('string'),
                ValidatorType('number'),
            ], (value, validators) => Standard(value, validators), And, MessageMap)
        ];

        let value = [
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

                let validator = MapCallbackFunction(validators, Standard, And, MessageMap);

                let and = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    (v)=>Or(v),
                    (v)=>MessageMap(v)
                );

                let or = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );

                let and = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    (v)=>Or(v),
                    (v)=>MessageMap(v)
                );

                let or = validator(value);

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

        let validators  = [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
            MapCallbackFunction([
                ValidatorType('string'),
                ValidatorType('number'),
            ], (value, validators) => Standard(value, validators), And, MessageMap)

        ];

        let value = [{}, {}, {}, [{}, {}]];

        describe('complete', function() {
            it(`and validation`, () => {

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );

                let and = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => Standard(value, validators),
                    (v)=>Or(v),
                    (v)=>MessageMap(v)
                );

                let or = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );
                let and = validator(value);

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

                let validator = MapCallbackFunction(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>MapPartial(value, validators),
                    (v)=>Or(v),
                    (v)=>MessageMap(v)
                );
                let or = validator(value);

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
