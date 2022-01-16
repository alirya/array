import ListCallback from '../../dist/validatable/list-callback-parameters';
import ListReturn from '../../dist/validator/validatable/list/list-parameters';
import ListReturnPartial from '../../dist/validator/validatable/list/list-partial-parameters';
import And from '../../dist/validatable/and-parameters';
import Or from '../../dist/validatable/or-parameters';
import Validatable from '@alirya/validatable/validatable';
import SimpleValidator from '@alirya/validator/simple';
import ValueInterface from '@alirya/value/value';
import Message from '@alirya/message/message';
import MessageMap from '../../dist/message/message/list/map';
import ValidatorType from '@alirya/type/validator/type-parameters';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('explicit typed', function() {

        type TypeValidator = SimpleValidator<any, string, Instance<any, string>>;

        type Type = [
            string,
            string,
        ];

        let validator : TypeValidator =  ValidatorType('string');

        let value : Type = [
            'name',
            'address',
        ];

        describe('auto', function() {

            let validatable = new ListCallback(value, validator,
                (value, validators) => ListReturn(value, validators),
                And,
                (v)=>MessageMap(v)
            );

            let unknown : unknown = validatable.value;

            let record : Type = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            // @ts-expecerror
            instance = validatable.validatables[3];
            // @ts-expecerror
            instance = validatable.validatables[4];
        });

        describe('auto partial', function() {

            let validatable = new ListCallback(value, validator,
                (value, validators) =>
                    <(Validatable & ValueInterface & Message<string>)[]>ListReturnPartial(value, validators),
                And,
                (v)=>MessageMap(v)
            );

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });
    });


    describe('explicit typed', function() {

        let validator  = ValidatorType('string');

        let value  = [
            'name',
            'address',
        ];


        describe('auto', function() {

            let validatable = new ListCallback(value, validator,
                (value, validators) => ListReturn(value, validators),
                And, (v)=>MessageMap(v)
            );

            let unknown : unknown = validatable.value;

            let value1 : string[] = validatable.value;

            // @ts-expecerror
            let value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });

        describe('auto partial', function() {

            let validatable = new ListCallback(value, validator,
                (value, validators) =>
                    <(Validatable & ValueInterface & Message<string>)[]>ListReturnPartial(value, validators),
                And, (v)=>MessageMap(v)
            );

            let unknown : unknown = validatable.value;

            let value1 : string[] = validatable.value;

            // @ts-expecerror
            let value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });
    });

});


describe('explicit', function() {

    describe('all valid', function() {

        type TypeValidator = SimpleValidator<any, string, Instance<any, string>>;

        type Type = [
            string,
            string,
            string,
        ];

        let validator : TypeValidator = ValidatorType('string');

        let value : Type = [
            'user',
            'name',
            'address',
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                let validatable = new ListCallback(value, validator,
                    (value, validators) => ListReturn(value, validators),
                    And, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

                // @ts-expecerror
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validatable = new ListCallback(value, validator,
                    (value, validators) => ListReturn(value, validators),
                    Or, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

                // @ts-expecerror
                expect(validatable.validatables[3]).toBe(undefined);
            });

        });

        describe('partial', function() {

            it(`and validation`, () => {

                let validatable = new ListCallback(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>ListReturnPartial(value, validators),
                    And, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

                // @ts-expecerror
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validatable = new ListCallback(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>ListReturnPartial(value, validators),
                    Or, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

                // @ts-expecerror
                expect(validatable.validatables[3]).toBe(undefined);
            });
        });

    });

    describe('mixed', function() {


        type TypeValidator = SimpleValidator<any, string, Instance<any, string>>;

        type Type = [
            string,
            number,
            string,
        ];

        let validator : TypeValidator= ValidatorType('string');

        let value : Type = [
            'name',
            11,
            'address',
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                let and = new ListCallback(value, validator,
                    (value, validators) => ListReturn(value, validators),
                    (v)=>And(v), (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(typeof and.validatables[0].message).toBe('string');

                expect(and.validatables[1].valid).toBe(false);
                expect(typeof and.validatables[1].message).toBe('string');

                expect(and.validatables[2].valid).toBe(true);
                expect(typeof and.validatables[2].message).toBe('string');

                // @ts-expecerror
                expect(and.validatables[3]).toBe(undefined);
            });


            it(`or validation `, () => {

                let or = new ListCallback(value, validator,
                    (value, validators) => ListReturn(value, validators),
                    (v)=>Or(v), (v)=>MessageMap(v)
                );

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.validatables[0].valid).toBe(true);

                expect(typeof or.validatables[1].message).toBe('string');
                expect(or.validatables[1].valid).toBe(false);

                expect(typeof or.validatables[2].message).toBe('string');
                expect(or.validatables[2].valid).toBe(true);

                // @ts-expecerror
                expect(or.validatables[3]).toBe(undefined);

            });
        });


        describe('partial', function() {

            it(`and validation`, () => {

                let and = new ListCallback(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>ListReturnPartial(value, validators),
                    (v)=>And(v), (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(typeof and.validatables[0].message).toBe('string');

                expect(and.validatables[1].valid).toBe(false);
                expect(typeof and.validatables[1].message).toBe('string');

                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);
            });


            it(`or validation `, () => {

                let or = new ListCallback(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>ListReturnPartial(value, validators),
                    (v)=>Or(v), (v)=>MessageMap(v)
                );

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.validatables[0].valid).toBe(true);

                expect(typeof or.validatables[1].message).toBe('string');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2]).toBe(<any>undefined);
                expect(or.validatables[3]).toBe(<any>undefined);

            });
        });
    });

    describe('all invalid', function() {

        type TypeValidator = SimpleValidator<any, string, Instance<any, string>>;

        type Type = [
            any,
            any,
            any,
        ];

        let validator : TypeValidator = ValidatorType('string');

        let value : Type = [{}, {}, {}];


        describe('complete', function() {
            it(`and validation`, () => {

                let and = new ListCallback(value, validator,
                    (value, validators) => ListReturn(value, validators),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(typeof and.validatables[0].message).toBe('string');
                expect(and.validatables[0].valid).toBe(false);

                expect(typeof and.validatables[1].message).toBe('string');
                expect(and.validatables[1].valid).toBe(false);

                expect(typeof and.validatables[2].message).toBe('string');
                expect(and.validatables[2].valid).toBe(false);

                // @ts-expecerror
                expect(and.validatables[3]).toBe(undefined);
            });

            it(`or validation `, () => {

                let or = new ListCallback(value, validator,
                    (value, validators) => ListReturn(value, validators),
                    (v)=>Or(v),
                    (v)=>MessageMap(v)
                );

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.validatables[0].valid).toBe(false);

                expect(typeof or.validatables[1].message).toBe('string');
                expect(or.validatables[1].valid).toBe(false);

                expect(typeof or.validatables[2].message).toBe('string');
                expect(or.validatables[2].valid).toBe(false);

                // @ts-expecerror
                expect(or.validatables[3]).toBe(undefined);
            });
        });


        describe('partial', function() {
            it(`and validation`, () => {

                let and = new ListCallback(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>ListReturnPartial(value, validators),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(false);
                expect(typeof and.validatables[0].message).toBe('string');

                expect(and.validatables[1]).toBe(<any>undefined);
                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);
            });

            it(`or validation `, () => {

                let or = new ListCallback(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>ListReturnPartial(value, validators),
                    (v)=>Or(v),
                    MessageMap
                );

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.validatables[0].valid).toBe(false);

                expect(or.validatables[1]).toBe(<any>undefined);
                expect(or.validatables[2]).toBe(<any>undefined);
                expect(or.validatables[3]).toBe(<any>undefined);
            });
        });
    });
});
