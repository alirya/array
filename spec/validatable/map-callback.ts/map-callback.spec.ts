import Map from '../../../dist/validatable/map-callback';
import Standard from '../../../dist/validator/validatable/list/map';
import PartialStandard from '../../../dist/validator/validatable/list/map-partial';
import And from '../../../dist/validatable/and';
import Or from '../../../dist/validatable/or';
import Validatable from '@alirya/validatable/validatable';
import ValidatorInterface from '@alirya/validator/simple';
import ValueInterface from '@alirya/value/value';
import Message from '@alirya/message/message';
import MessageMap from '../../../dist/message/message/list/map';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('explicit typed', function() {

        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        type Type = [
            string,
            string,
        ];

        let validator : TypeValidator = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        let value : Type = [
            'name',
            'address',
        ];

        describe('auto', function() {

            let validatable = new Map.Parameters(value, validator,
                (value, validators) => Standard.Parameters(value, validators),
                And.Parameters,
                (v)=>MessageMap(v)
            );

            let unknown : unknown = validatable.value;

            let record : Type = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            // @ts-expect-error
            instance = validatable.validatables[3];
            // @ts-expect-error
            instance = validatable.validatables[4];
        });

        describe('auto partial', function() {

            let validatable = new Map.Parameters(value, validator,
                (value, validators) =>
                    <(Validatable & ValueInterface & Message<string>)[]>PartialStandard.Parameters(value, validators),
                And.Parameters,
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

        let validator  = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        let value  = [
            'name',
            'address',
        ];


        describe('auto', function() {

            let validatable = new Map.Parameters(value, validator,
                (value, validators) => Standard.Parameters(value, validators),
                And.Parameters, (v)=>MessageMap(v)
            );

            let unknown : unknown = validatable.value;

            let value1 : string[] = validatable.value;

            // @ts-expect-error
            let value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });

        describe('auto partial', function() {

            let validatable = new Map.Parameters(value, validator,
                (value, validators) =>
                    <(Validatable & ValueInterface & Message<string>)[]>PartialStandard.Parameters(value, validators),
                And.Parameters, (v)=>MessageMap(v)
            );

            let unknown : unknown = validatable.value;

            let value1 : string[] = validatable.value;

            // @ts-expect-error
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

        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        type Type = [
            string,
            string,
            string,
        ];

        let validator : TypeValidator = [
            TypeParameters('string'),
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        let value : Type = [
            'user',
            'name',
            'address',
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                let validatable = new Map.Parameters(value, validator,
                    (value, validators) => Standard.Parameters(value, validators),
                    And.Parameters, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validatable = new Map.Parameters(value, validator,
                    (value, validators) => Standard.Parameters(value, validators),
                    Or.Parameters, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

        });

        describe('partial', function() {

            it(`and validation`, () => {

                let validatable = new Map.Parameters(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>PartialStandard.Parameters(value, validators),
                    And.Parameters, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validatable = new Map.Parameters(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>PartialStandard.Parameters(value, validators),
                    Or.Parameters, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toEqual(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });
        });

    });

    describe('mixed', function() {


        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, number, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        type Type = [
            string,
            string,
            string,
        ];

        let validator : TypeValidator= [
            TypeParameters('string'),
            TypeParameters('number'),
            TypeParameters('string'),
        ];

        let value : Type = [
            '11',
            'name',
            'address',
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                let and = new Map.Parameters(value, validator,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>And.Parameters(v), (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(typeof and.validatables[0].message).toBe('string');

                expect(and.validatables[1].valid).toBe(false);
                expect(typeof and.validatables[1].message).toBe('string');

                expect(and.validatables[2].valid).toBe(true);
                expect(typeof and.validatables[2].message).toBe('string');

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
            });


            it(`or validation `, () => {

                let or = new Map.Parameters(value, validator,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>Or.Parameters(v), (v)=>MessageMap(v)
                );

                expect(or.valid).toBe(true);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('string');
                expect(or.validatables[0].valid).toBe(true);

                expect(typeof or.validatables[1].message).toBe('string');
                expect(or.validatables[1].valid).toBe(false);

                expect(typeof or.validatables[2].message).toBe('string');
                expect(or.validatables[2].valid).toBe(true);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);

            });
        });


        describe('partial', function() {

            it(`and validation`, () => {

                let and = new Map.Parameters(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>PartialStandard.Parameters(value, validators),
                    (v)=>And.Parameters(v), (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(typeof and.validatables[0].message).toBe('string');

                expect(and.validatables[1].valid).toBe(false);
                expect(typeof and.validatables[1].message).toBe('string');

                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);
            });


            it(`or validation `, () => {

                let or = new Map.Parameters(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>PartialStandard.Parameters(value, validators),
                    (v)=>Or.Parameters(v), (v)=>MessageMap(v)
                );

                expect(or.valid).toBe(true);
                expect(or.value).toEqual(value);

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

        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, number, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        type Type = [
            object,
            object,
            object,
        ];

        let validator : TypeValidator = [
            TypeParameters('string'),
            TypeParameters('number'),
            TypeParameters('string'),
        ];

        let value : Type = [{}, {}, {}];

        describe('complete', function() {
            it(`and validation`, () => {

                let and = new Map.Parameters(value, validator,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>And.Parameters(v),
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

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
            });

            it(`or validation `, () => {

                let or = new Map.Parameters(value, validator,
                    (value, validators) => Standard.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
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

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);
            });
        });


        describe('partial', function() {
            it(`and validation`, () => {

                let and = new Map.Parameters(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>PartialStandard.Parameters(value, validators),
                    (v)=>And.Parameters(v),
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

                let or = new Map.Parameters(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>PartialStandard.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
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
