import ValueAll from '../../dist/validator/value-all';
import ListReturn from '../../dist/validator/validatable/list/list';
import ListReturnPartial from '../../dist/validator/validatable/list/list-partial';
import And from '../../dist/validatable/and';
import Or from '../../dist/validatable/or';
import Validatable from '@alirya/validatable/validatable';
import ValidatorInterface from '@alirya/validator/simple';
import Message from '@alirya/message/message';
import MessageMap from '../../dist/message/message/list/map';
import {TypeParameters} from '@alirya/type/validator/type';
import {InstanceParameters} from '@alirya/class/validator/instance';
import Value from '@alirya/value/value';
import Instance from '@alirya/validator/validatable/validatable';
import ListCallbackFunction from '../../dist/validator/list-callback';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('explicit typed', function() {

        type TypeValidator = ValidatorInterface<any, string, Instance<any, string>>;

        type Type = [
            string,
            string,
        ];

        let validators : TypeValidator = TypeParameters('string');

        let value : Type = [
            'name',
            'address',
        ];

        describe('auto', function() {

            let validator = ListCallbackFunction.Parameters(validators,
                (value, validators) => ListReturn.Parameters(value, validators),
                And.Parameters, MessageMap
            );

            let validatable = validator(value);

            let unknown : unknown = validatable.value;

            let record : Type|unknown[] = validatable.value;

            let instance : Validatable;
            let message : Message;

            instance = validatable.validatables[0];
            instance = validatable.validatables[1];

            message = validatable.messages[0];
            message = validatable.messages[1];


            instance = validatable.validatables[3];

            message = validatable.messages[3];

            instance = validatable.validatables[4];

            message = validatable.messages[4];

            it('recursive', function() {

                let validator = TypeParameters('string');

                let list1 = ListCallbackFunction.Parameters(validator, (value, validators) => ListReturn.Parameters(value, validators), And.Parameters, MessageMap);
                let list2 = ListCallbackFunction.Parameters(list1, (value, validators) => ListReturn.Parameters(value, validators), And.Parameters, MessageMap);
                let list3 = ListCallbackFunction.Parameters(list2, (value, validators) => ListReturn.Parameters(value, validators), And.Parameters, MessageMap);

            });

        });

        it('auto partial', function() {

            let validator = ListCallbackFunction.Parameters(validators,
                (value, validators) => <(Validatable & Value & Message<string>)[]>ListReturnPartial.Parameters(value, validators),
                And.Parameters, (v)=>MessageMap(v)
            );

            let validatable = validator(value);

            let unknown : unknown = validatable.value;
            let string : Type|unknown[] = validatable.value;

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

        let validators  = TypeParameters('string');

        let value  = [
            'name',
            'address',
        ];

        it('auto', function() {

            let validator = ListCallbackFunction.Parameters(validators,
                (value, validators) => ListReturn.Parameters(value, validators),
                And.Parameters, (v)=>MessageMap(v)
            );

            let validatable = validator(value);

            let unknown : unknown = validatable.value;

            let value1 : string[]|unknown[] = validatable.value;

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

        it('auto partial', function() {

            let validator = ListCallbackFunction.Parameters(validators,
                (value, validators) => <(Validatable & Value & Message<string>)[]>ListReturnPartial.Parameters(value, validators),
                And.Parameters, (v)=>MessageMap(v)
            );
            let validatable = validator(value);

            let unknown : unknown = validatable.value;

            let value1 : string[]|unknown[] = validatable.value;

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

        type TypeValidator = ValidatorInterface<any, string, Instance<any, string>>;

        type Type = [
            string,
            string,
            string,
        ];

        let validators : TypeValidator = TypeParameters('string');

        let value : Type = [
            'user',
            'name',
            'address',
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    And.Parameters, (v)=>MessageMap(v)
                );
                let validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

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

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    Or.Parameters, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

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

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>ListReturnPartial.Parameters(value, validators),
                    And.Parameters, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

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

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>ListReturnPartial.Parameters(value, validators),
                    Or.Parameters, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

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


        type TypeValidator = ValidatorInterface<any, string, Instance<any, string>>;

        type Type = [
            string,
            number,
            string,
        ];

        let validators : TypeValidator= TypeParameters('string');

        let value : Type = [
            'name',
            11,
            'address',
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );

                let and = validator(value);

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

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

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );

                let or = validator(value);

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

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

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>ListReturnPartial.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );

                let and = validator(value);

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

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

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>ListReturnPartial.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );

                let or = validator(value);

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

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

        type TypeValidator = ValidatorInterface<any, string, Instance<any, string>>;

        type Type = [
            object,
            object,
            object,
        ];

        let validators : TypeValidator = TypeParameters('string');

        let value : Type = [{}, {}, {}];

        describe('complete', function() {
            it(`and validation`, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    (v)=>And.Parameters(v),
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

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
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

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>ListReturnPartial.Parameters(value, validators),
                    (v)=>And.Parameters(v),
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

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => <(Validatable & Value & Message<string>)[]>ListReturnPartial.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
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

        let validators =
            ValueAll.Parameters([
                TypeParameters('string'),
                InstanceParameters(Array),
            ], Or.Parameters, MessageMap)
        ;

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

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    And.Parameters, (v)=>MessageMap(v)
                );
                let validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message.map(message=>typeof message)).toEqual(['string', 'string']);
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message.map(message=>typeof message)).toEqual(['string', 'string']);
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message.map(message=>typeof message)).toEqual(['string', 'string']);
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);


                expect(validatable.validatables[3].validatables[0].valid).toBe(false);

                expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');

                expect(validatable.validatables[3].validatables[0].value).toEqual([ 'name', 'address' ]);


                expect(validatable.validatables[3].validatables[1].valid).toBe(true);

                expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');

                expect(validatable.validatables[3].validatables[1].value).toEqual([ 'name', 'address' ]);
            });

            it(`or validation`, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    Or.Parameters, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message.map(message=>typeof message)).toEqual( [ 'string', 'string' ]);
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);


                expect(validatable.validatables[3].validatables[0].valid).toBe(false);

                expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');

                expect(validatable.validatables[3].validatables[0].value).toEqual( [ 'name', 'address' ]);


                expect(validatable.validatables[3].validatables[1].valid).toBe(true);

                expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');

                expect(validatable.validatables[3].validatables[1].value).toEqual( [ 'name', 'address' ]);
            });

        });

        describe('partial', function() {

            it(`and validation`, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturnPartial.Parameters(value, validators),
                    And.Parameters, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message.map(message=>typeof message)).toEqual(['string', 'string']);
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message.map(message=>typeof message)).toEqual(['string', 'string']);
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message.map(message=>typeof message)).toEqual(['string', 'string']);
                expect(validatable.message[2]).toBe(validatable.validatables[2].message);


                expect(validatable.validatables[3].validatables[0].valid).toBe(false);

                expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');

                expect(validatable.validatables[3].validatables[0].value).toEqual( [ 'name', 'address' ] );


                expect(validatable.validatables[3].validatables[1].valid).toBe(true);

                expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');

                expect(validatable.validatables[3].validatables[1].value).toEqual( [ 'name', 'address' ] );
            });

            it(`or validation`, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturnPartial.Parameters(value, validators),
                    Or.Parameters, (v)=>MessageMap(v)
                );

                let validatable = validator(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message.map(message=>typeof message)).toEqual([ 'string', 'string' ] );
                expect(validatable.message[0]).toBe(validatable.validatables[0].message);

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message.map(message=>typeof message)).toEqual( [ 'string', 'string' ]);
                expect(validatable.message[1]).toBe(validatable.validatables[1].message);

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(validatable.message[2]).toEqual(validatable.validatables[2].message);


                expect(validatable.validatables[3].validatables[0].valid).toBe(false);

                expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');

                expect(validatable.validatables[3].validatables[0].value).toEqual( [ 'name', 'address' ]);


                expect(validatable.validatables[3].validatables[1].valid).toBe(true);

                expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');

                expect(validatable.validatables[3].validatables[1].value).toEqual([ 'name', 'address' ] );
            });
        });

    });

    describe('mixed', function() {

        let validators = ValueAll.Parameters([
                TypeParameters('string'),
                InstanceParameters(Array),
            ], Or.Parameters, MessageMap);

        let value = [
            '11',
            'address',
            [
                'data1',
                'data2'
            ],
            {}
        ];

        describe('complete', function() {

            it(`and validation`, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );

                let and = validator(value);

                expect<boolean>(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(typeof and.validatables[0].message).toBe('object');
                expect(typeof and.message[0]).toBe('object');

                expect(and.validatables[1].valid).toBe(true);
                expect(typeof and.validatables[1].message).toBe('object');
                expect(typeof and.message[1]).toBe('object');

                expect(and.validatables[2].valid).toBe(true);
                expect(typeof and.validatables[2].message).toBe('object');
                expect(typeof and.message[2]).toBe('object');


                expect(and.validatables[3].validatables[0].valid).toBe(false);

                expect(typeof and.validatables[3].validatables[0].message).toBe('string');

                expect(and.validatables[3].validatables[0].value).toEqual({});


                expect(and.validatables[3].validatables[1].valid).toBe(false);

                expect(typeof and.validatables[3].validatables[1].message).toBe('string');

                expect(and.validatables[3].validatables[1].value).toEqual({});
            });


            it(`or validation `, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    Or.Parameters,
                    MessageMap
                );

                let or = validator(value);

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(or.validatables[0].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(true);

                expect(or.validatables[1].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(or.message[1]).toBe(or.validatables[1].message);
                expect(or.validatables[1].valid).toBe(true);

                expect(or.validatables[2].message.map(message=>typeof message)).toEqual(['string', 'string']);
                expect(or.message[2].map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(or.validatables[2].valid).toBe(true);


                expect(or.validatables[3].validatables[0].valid).toBe(false);

                expect(typeof or.validatables[3].validatables[0].message).toBe('string');

                expect(or.validatables[3].validatables[0].value).toEqual({});


                expect(or.validatables[3].validatables[1].valid).toBe(false);

                expect(typeof or.validatables[3].validatables[1].message).toBe('string');

                expect(or.validatables[3].validatables[1].value).toEqual({});

            });
        });


        describe('partial', function() {

            it(`and validation`, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturnPartial.Parameters(value, validators),
                    And.Parameters,
                    MessageMap
                );

                let and = validator(value);

                expect<boolean>(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(and.validatables[0].message.map(message=>typeof message)).toEqual([ 'string', 'string' ] );
                expect(and.message[0]).toBe(and.validatables[0].message);

                expect(and.validatables[1].valid).toBe(true);
                expect(and.validatables[1].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(and.message[1]).toBe(and.validatables[1].message);

                expect(and.validatables[2].valid).toBe(true);
                expect(and.validatables[2].message.map(message=>typeof message)).toEqual([ 'string', 'string']);
                expect(and.message[2]).toBe(and.validatables[2].message);

                expect(and.validatables[3].valid).toBe(false);
                expect(and.validatables[3].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(and.message[3]).toBe(and.validatables[3].message);

                expect(and.validatables[4]).toBe(<any>undefined);
            });


            it(`or validation `, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturnPartial.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );

                let or = validator(value);


                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(or.validatables[0].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(true);

                expect(or.validatables[1].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(or.message[1]).toBe(or.validatables[1].message);
                expect(or.validatables[1].valid).toBe(true);

                expect(or.validatables[2].valid).toEqual(true);
                expect(or.message[2].map(message=>typeof message)).toEqual([ 'string', 'string' ]);

                expect(or.validatables[3].valid).toBe(false);
                expect(or.message[3].map(message=>typeof message)).toEqual( [ 'string', 'string' ]);
            });
        });
    });

    describe('all invalid', function() {

        let validators = ValueAll.Parameters([
            TypeParameters('string'),
            TypeParameters('number'),
        ], Or.Parameters, MessageMap);

        let value = [{}, {}, {}, [{}, {}]];

        describe('complete', function() {
            it(`and validation`, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );

                let and = validator(value);

                expect<boolean>(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(typeof and.validatables[0].message).toBe('object');
                expect(and.message[0]).toBe(and.validatables[0].message);
                expect(and.validatables[0].valid).toBe(false);

                expect(typeof and.validatables[1].message).toBe('object');
                expect(and.message[1]).toBe(and.validatables[1].message);
                expect(and.validatables[1].valid).toBe(false);

                expect(typeof and.validatables[2].message).toBe('object');
                expect(and.message[2]).toBe(and.validatables[2].message);
                expect(and.validatables[2].valid).toBe(false);


                expect(and.validatables[3].validatables[0].valid).toBe(false);

                expect(typeof and.validatables[3].validatables[0].message).toBe('string');

                expect(and.validatables[3].validatables[0].value).toEqual([{}, {}]);


                expect(and.validatables[3].validatables[1].valid).toBe(false);

                expect(typeof and.validatables[3].validatables[1].message).toBe('string');

                expect(and.validatables[3].validatables[1].value).toEqual([{}, {}]);
            });

            it(`or validation `, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturn.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );

                let or = validator(value);

                expect<boolean>(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(typeof or.validatables[0].message).toBe('object');
                expect(or.message[0]).toBe(or.validatables[0].message);
                expect(or.validatables[0].valid).toBe(false);

                expect(typeof or.validatables[1].message).toBe('object');
                expect(or.message[1]).toBe(or.validatables[1].message);
                expect(or.validatables[1].valid).toBe(false);

                expect(typeof or.validatables[2].message).toBe('object');
                expect(or.message[2]).toBe(or.validatables[2].message);
                expect(or.validatables[2].valid).toBe(false);


                expect(or.validatables[3].validatables[0].valid).toBe(false);

                expect(typeof or.validatables[3].validatables[0].message).toBe('string');

                expect(or.validatables[3].validatables[0].value).toEqual([{}, {}]);


                expect(or.validatables[3].validatables[1].valid).toBe(false);

                expect(typeof or.validatables[3].validatables[1].message).toBe('string');

                expect(or.validatables[3].validatables[1].value).toEqual([ Object({  }), Object({  }) ]);
            });
        });


        describe('partial', function() {
            it(`and validation`, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturnPartial.Parameters(value, validators),
                    (v)=>And.Parameters(v),
                    (v)=>MessageMap(v)
                );
                let and = validator(value);

                expect<boolean>(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(false);
                expect(and.validatables[0].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
                expect(and.message[0]).toBe(and.validatables[0].message);

                expect(and.validatables[1]).toBe(<any>undefined);
                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);

                expect(and.message[1]).toBe(<any>undefined);
                expect(and.message[2]).toBe(<any>undefined);
                expect(and.message[3]).toBe(<any>undefined);
            });

            it(`or validation `, () => {

                let validator = ListCallbackFunction.Parameters(validators,
                    (value, validators) => ListReturnPartial.Parameters(value, validators),
                    (v)=>Or.Parameters(v),
                    (v)=>MessageMap(v)
                );
                let or = validator(value);

                expect<boolean>(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(or.validatables[0].message.map(message=>typeof message)).toEqual([ 'string', 'string' ]);
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
