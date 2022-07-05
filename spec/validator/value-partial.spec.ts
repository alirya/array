import Value from '../../dist/validator/value-partial.js';
import And from '../../dist/validatable/and.js';
import ValidatablesInterface from '../../dist/validatable/validatables/validatables.js';
import Validatables from '../../dist/validatable/validatables/validatables.js';
import Validatable from '@alirya/validatable/validatable.js';
import SimpleValidator from '@alirya/validator/simple.js';
import MessageMap from '../../dist/message/message/list/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Instance from '@alirya/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('explicit type', function() {

        type TypeValidator = [
            SimpleValidator<any, string, Instance<any, string>>,
            SimpleValidator<any, string, Instance<any, string>>,
        ];

        const validator : TypeValidator = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        describe('complete', function() {

            const property = Value.Parameters<any, string, TypeValidator>(validator, (v)=>And.Parameters(<Validatable[]>v), (v)=>MessageMap(v));

            const validatable = property('data');

            const key : Validatable = validatable[0];

            const validatables : Validatables = validatable;

            const record : Validatable[] = validatable.validatables;

            const and : Validatables<Validatable[] > = validatable;

            const unknown : unknown = validatable.value;

            const string : string = validatable.value;

            it('recursive', function() {

                const validator = TypeParameters('string');
                const list1 = Value.Parameters([validator], And.Parameters, MessageMap);
                const list2 = Value.Parameters([list1], And.Parameters, MessageMap);
                // @ts-expect-errors
                const list3 = Value.Parameters([list2], And.Parameters, MessageMap);

            });

        });

        it('auto', function() {

            const property = Value.Parameters(validator, (v)=>And.Parameters(v), (v)=>MessageMap(v));

            const validatable = property('data');

            const key : Validatable = validatable[0];

            const validatables : ValidatablesInterface = validatable;

            const record : Validatable[] = validatable.validatables;

            const and : Validatables<Validatable[]> = validatable;

            const unknown : unknown = validatable.value;

            const string : string = validatable.value;

        });
    });

    describe('implicit type', function() {

        const validator  = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        it('complete', function() {

            const property = Value.Parameters(validator, (v)=>And.Parameters(v), (v)=>MessageMap(v));

            const validatable = property('data');
            validatable.value;

            const key : Validatable = validatable.validatables[0];

            const validatables : Validatables = validatable;

            const record : Validatable[] = validatable.validatables;

            const and : Validatables<Validatable[]> = validatable;

            const unknown : unknown = validatable.value;

            const string : string = validatable.value;

        });

        it('auto', function() {

            const property = Value.Parameters(validator, (v)=>And.Parameters(v), (v)=>MessageMap(v));

            const validatable = property('data');

            const key : Validatable = validatable[0];

            const validatables : Validatables = validatable;


            const record : Validatable[] = validatable.validatables;

            const and : Validatables<Validatable[]> = validatable;

            const unknown : unknown = validatable.value;

            const string : string = validatable.value;

        });
    });
});


describe('all valid', function() {


    const validator  = [
        TypeParameters('string'),
        TypeParameters('string'),
        TypeParameters('string'),
    ];

    describe('complete', function() {

        const property = Value.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), (v)=>MessageMap(v));

        const validatable = property('data');

        it('value', ()=>{
            expect(validatable.value).toBe('data');
            expect(validatable.valid).toBe(true);
        });

        it('index 0', ()=>{

            if(validatable.validatables[0]) {

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

            } else {

                fail('index 0 should exits');
            }
        });

        it('index 1', ()=>{

            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

            } else {

                fail('index 1 should exits');
            }
        });

        it('index 2', ()=>{

            if(validatable.validatables[2]) {

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

            } else {

                fail('index 2 should exits');
            }
        });

    });

});


describe('mixed', function() {


    const validator  = [
        TypeParameters('string'),
        TypeParameters('number'),
        TypeParameters('string'),
    ];

    describe('complete', function() {

        const property = Value.Parameters(validator,
            (v)=>And.Parameters(v),
            (v)=>MessageMap(v)
        );

        const validatable = property('data');

        it('value', ()=>{
            expect(validatable.value).toBe('data');
            expect<boolean>(validatable.valid).toBe(false);
        });

        it('index 0', ()=>{

            if(validatable.validatables[0]) {

                expect(validatable.validatables[0].valid).toBe(true);
                expect(typeof validatable.validatables[0].message).toBe('string');

            } else {

                fail('index 0 should exits');
            }
        });

        it('index 1', ()=>{

            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(false);
                expect(typeof validatable.validatables[1].message).toBe('string');

            } else {

                fail('index 1 should exits');
            }
        });

        it('index 2', ()=>{

            if(validatable.validatables[2]) {

                fail('index 2 should not exits');
            }
        });

    });

});

describe('all invalid', function() {

    const validator  = [
        TypeParameters('number'),
        TypeParameters('number'),
        TypeParameters('number'),
    ];

    const property = Value.Parameters(validator, And.Parameters, MessageMap);

    const validatable = property('data');

    it('value', ()=>{
        expect(validatable.value).toBe('data');
        expect<boolean>(validatable.valid).toBe(false);
    });

    it('index 0', ()=>{

        if(validatable.validatables[0]) {

            expect(validatable.validatables[0].valid).toBe(false);
            expect(typeof validatable.validatables[0].message).toBe('string');

        } else {

            fail('index 0 should exits');
        }
    });

    it('index 1', ()=>{

        if(validatable.validatables[1]) {
            fail('index 1 should exits');
        }
    });

    it('index 2', ()=>{
        if(validatable.validatables[2]) {
            fail('index 2 should not exits');
        }
    });
});



describe('recursive', ()=>{

    describe('all valid', function() {

        const validator  = [
            TypeParameters('string'),
            TypeParameters('string'),
            TypeParameters('string'),
            Value.Parameters([
                TypeParameters('string'),
                TypeParameters('string'),
            ], And.Parameters, MessageMap)
        ];

        describe('complete', function() {

            const property = Value.Parameters(validator, And.Parameters, MessageMap);

            const validatable = property('data');

            it('value', ()=>{
                expect(validatable.value).toBe('data');
                expect(validatable.valid).toBe(true);
            });

            it('index 0', ()=>{

                if(validatable.validatables[0]) {

                    expect(validatable.validatables[0].valid).toBe(true);
                    expect(typeof validatable.validatables[0].message).toBe('string');

                } else {

                    fail('index 0 should exits');
                }
            });

            it('index 1', ()=>{

                if(validatable.validatables[1]) {

                    expect(validatable.validatables[1].valid).toBe(true);
                    expect(typeof validatable.validatables[1].message).toBe('string');

                } else {

                    fail('index 1 should exits');
                }
            });

            it('index 2', ()=>{

                if(validatable.validatables[2]) {

                    expect(validatable.validatables[2].valid).toBe(true);
                    expect(typeof validatable.validatables[2].message).toBe('string');

                } else {

                    fail('index 2 should exits');
                }
            });

            it('index 3.0', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {

                    // @ts-expect-error
                    expect(validatable.validatables[3].validatables[0].valid).toBe(true);
                    // @ts-expect-error
                    expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');

                } else {

                    fail('index 2 should exits');
                }
            });

            it('index 3.1', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[1]) {

                    // @ts-expect-error
                    expect(validatable.validatables[3].validatables[1].valid).toBe(true);
                    // @ts-expect-error
                    expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');

                } else {

                    fail('index 2 should exits');
                }
            });

            it('index 3.2', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                    fail('index 2 should not exits');
                }
            });

        });

    });


    describe('mixed', function() {

        const validator  = [
            TypeParameters('string'),
            TypeParameters('number'),
            TypeParameters('string'),
            Value.Parameters([
                TypeParameters('string'),
                TypeParameters('string'),
            ], And.Parameters, MessageMap)
        ];

        describe('complete', function() {

            const property = Value.Parameters(validator, And.Parameters, MessageMap);

            const validatable = property('data');

            it('value', ()=>{
                expect(validatable.value).toBe('data');
                expect<boolean>(validatable.valid).toBe(false);
            });

            it('index 0', ()=>{

                if(validatable.validatables[0]) {

                    expect(validatable.validatables[0].valid).toBe(true);
                    expect(typeof validatable.validatables[0].message).toBe('string');

                } else {

                    fail('index 0 should exits');
                }
            });

            it('index 1', ()=>{

                if(validatable.validatables[1]) {

                    expect(validatable.validatables[1].valid).toBe(false);
                    expect(typeof validatable.validatables[1].message).toBe('string');

                } else {

                    fail('index 1 should exits');
                }
            });

            it('index 2', ()=>{

                if(validatable.validatables[2]) {

                    fail('index 2 should not exits');
                }
            });


            it('index 3.0', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {

                    fail('should no exits');
                }
            });

            it('index 3.1', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[1]) {

                    fail('should exits');
                }
            });

            it('index 3.2', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                    fail('should exits');
                }
            });

    });

    describe('all invalid', function() {

        const validator  = [
            TypeParameters('number'),
            TypeParameters('number'),
            TypeParameters('number'),
            Value.Parameters/*<unknown, number>*/([
                TypeParameters('number'),
                TypeParameters('number'),
            ], And.Parameters, MessageMap)
        ];

        const property = Value.Parameters/*<unknown, number>*/(validator, And.Parameters, MessageMap);

        const validatable = property('data');

        it('value', ()=>{
            expect(validatable.value).toBe('data');
            expect<boolean>(validatable.valid).toBe(false);
        });

        it('index 0', ()=>{

            if(validatable.validatables[0]) {

                expect(validatable.validatables[0].valid).toBe(false);
                expect(typeof validatable.validatables[0].message).toBe('string');

            } else {

                fail('index 0 should exits');
            }
        });

        it('index 1', ()=>{

            if(validatable.validatables[1]) {
                fail('index 1 should exits');
            }
        });

        it('index 2', ()=>{
            if(validatable.validatables[2]) {
                fail('index 2 should not exits');
            }
        });


        it('index 3.0', ()=>{

            if(validatable.validatables[3]) {

                fail('should not exits');
            }
        });

        it('index 3.1', ()=>{

            if(validatable.validatables[3]) {

                fail('should not exits');
            }
        });

        it('index 3.2', ()=>{

            if(validatable.validatables[3]) {

                fail('should not exists');
            }
        });
    });

    });

});
