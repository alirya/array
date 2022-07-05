import {ListCallbackParameters} from '../../dist/validatable/list-callback.js';
import {ListParameters} from '../../dist/validator/validatable/list/list.js';
import {ListPartialParameters} from '../../dist/validator/validatable/list/list-partial.js';
import {AndParameters} from '../../dist/validatable/and.js';
import {OrParameters} from '../../dist/validatable/or.js';
import Validatable from '@alirya/validatable/validatable.js';
import SimpleValidator from '@alirya/validator/simple.js';
import ValueInterface from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';
import MessageMap from '../../dist/message/message/list/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Instance from '@alirya/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('explicit typed', function() {

        type TypeValidator = SimpleValidator<any, string, Instance<any, string>>;

        type Type = [
            string,
            string,
        ];

        const validator : TypeValidator =  TypeParameters('string');

        const value : Type = [
            'name',
            'address',
        ];

        it('auto', function() {

            const validatable = new ListCallbackParameters(value, validator,
                (value, validators) => ListParameters(value, validators),
                AndParameters,
                (v)=>MessageMap(v)
            );

            const unknown : unknown = validatable.value;

            const record : Type = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            // @ts-expect-error
            instance = validatable.validatables[3];
            // @ts-expect-error
            instance = validatable.validatables[4];
        });

        it('auto partial', function() {

            const validatable = new ListCallbackParameters(value, validator,
                (value, validators) =>
                    <(Validatable & ValueInterface & Message<string>)[]>ListPartialParameters(value, validators),
                AndParameters,
                (v)=>MessageMap(v)
            );

            const unknown : unknown = validatable.value;
            const string : Type = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });
    });


    describe('explicit typed', function() {

        const validator  = TypeParameters('string');

        const value  = [
            'name',
            'address',
        ];


        it('auto', function() {

            const validatable = new ListCallbackParameters(value, validator,
                (value, validators) => ListParameters(value, validators),
                AndParameters, (v)=>MessageMap(v)
            );

            const unknown : unknown = validatable.value;

            const value1 : string[] = validatable.value;

            // @ts-expect-error
            const value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });

        it('auto partial', function() {

            const validatable = new ListCallbackParameters(value, validator,
                (value, validators) =>
                    <(Validatable & ValueInterface & Message<string>)[]>ListPartialParameters(value, validators),
                AndParameters, (v)=>MessageMap(v)
            );

            const unknown : unknown = validatable.value;

            const value1 : string[] = validatable.value;

            // @ts-expect-error
            const value2 : [string, string] = validatable.value;

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

        const validator : TypeValidator = TypeParameters('string');

        const value : Type = [
            'user',
            'name',
            'address',
        ];

        describe('complete', function() {

            it('and validation', () => {

                const validatable = new ListCallbackParameters(value, validator,
                    (value, validators) => ListParameters(value, validators),
                    AndParameters, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it('or validation', () => {

                const validatable = new ListCallbackParameters(value, validator,
                    (value, validators) => ListParameters(value, validators),
                    OrParameters, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

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

            it('and validation', () => {

                const validatable = new ListCallbackParameters(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>ListPartialParameters(value, validators),
                    AndParameters, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it('or validation', () => {

                const validatable = new ListCallbackParameters(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>ListPartialParameters(value, validators),
                    OrParameters, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

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


        type TypeValidator = SimpleValidator<any, string, Instance<any, string>>;

        type Type = [
            string,
            number,
            string,
        ];

        const validator : TypeValidator= TypeParameters('string');

        const value : Type = [
            'name',
            11,
            'address',
        ];

        describe('complete', function() {

            it('and validation', () => {

                const and = new ListCallbackParameters(value, validator,
                    (value, validators) => ListParameters(value, validators),
                    (v)=>AndParameters(v), (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(typeof and.validatables[0].message).toBe('string');

                expect(and.validatables[1].valid).toBe(false);
                expect(typeof and.validatables[1].message).toBe('string');

                expect(and.validatables[2].valid).toBe(true);
                expect(typeof and.validatables[2].message).toBe('string');

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
            });


            it('or validation ', () => {

                const or = new ListCallbackParameters(value, validator,
                    (value, validators) => ListParameters(value, validators),
                    (v)=>OrParameters(v), (v)=>MessageMap(v)
                );

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

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

            it('and validation', () => {

                const and = new ListCallbackParameters(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>ListPartialParameters(value, validators),
                    (v)=>AndParameters(v), (v)=>MessageMap(v)
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


            it('or validation ', () => {

                const or = new ListCallbackParameters(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>ListPartialParameters(value, validators),
                    (v)=>OrParameters(v), (v)=>MessageMap(v)
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

        const validator : TypeValidator = TypeParameters('string');

        const value : Type = [{}, {}, {}];


        describe('complete', function() {
            it('and validation', () => {

                const and = new ListCallbackParameters(value, validator,
                    (value, validators) => ListParameters(value, validators),
                    (v)=>AndParameters(v),
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

            it('or validation ', () => {

                const or = new ListCallbackParameters(value, validator,
                    (value, validators) => ListParameters(value, validators),
                    (v)=>OrParameters(v),
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
            it('and validation', () => {

                const and = new ListCallbackParameters(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>ListPartialParameters(value, validators),
                    (v)=>AndParameters(v),
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

            it('or validation ', () => {

                const or = new ListCallbackParameters(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>ListPartialParameters(value, validators),
                    (v)=>OrParameters(v),
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
