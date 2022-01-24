import Value from '../../dist/validator/value-partial-parameters';
import And from '../../dist/validatable/and-parameters';
import ValidatablesInterface from '../../dist/validatable/validatables/validatables';
import Validatables from '../../dist/validatable/validatables/validatables';
import Validatable from '@alirya/validatable/validatable';
import SimpleValidator from '@alirya/validator/simple';
import MessageMap from '../../dist/message/message/list/map';
import ValidatorType from '@alirya/type/validator/type-parameters';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('explicit type', function() {

        type TypeValidator = [
            SimpleValidator<any, string, Instance<any, string>>,
            SimpleValidator<any, string, Instance<any, string>>,
        ];

        let validator : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        describe('complete', function() {

            let property = Value<any, string, TypeValidator>(validator, (v)=>And(<Validatable[]>v), (v)=>MessageMap(v));

            let validatable = property('data');

            let key : Validatable = validatable[0];

            let validatables : Validatables = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables<Validatable[] > = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

            describe('recursive', function() {

                let validator = ValidatorType('string');
                let list1 = Value([validator], And, MessageMap);
                let list2 = Value([list1], And, MessageMap);
                let list3 = Value([list2], And, MessageMap);

            });

        });

        describe('auto', function() {

            let property = Value(validator, (v)=>And(v), (v)=>MessageMap(v));

            let validatable = property('data');

            let key : Validatable = validatable[0];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables<Validatable[]> = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });
    });

    describe('implicit type', function() {

        let validator  = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        describe('complete', function() {

            let property = Value(validator, (v)=>And(v), (v)=>MessageMap(v));

            let validatable = property('data');
            validatable.value;

            let key : Validatable = validatable.validatables[0];

            let validatables : Validatables = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables<Validatable[]> = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });

        describe('auto', function() {

            let property = Value(validator, (v)=>And(v), (v)=>MessageMap(v));

            let validatable = property('data');

            let key : Validatable = validatable[0];

            let validatables : Validatables = validatable;


            let record : Validatable[] = validatable.validatables;

            let and : Validatables<Validatable[]> = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });
    });
});


describe('all valid', function() {


    let validator  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
    ];

    describe('complete', function() {

        let property = Value(validator, (v)=>And(<Validatable[]>v), (v)=>MessageMap(v));

        let validatable = property('data');

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


    let validator  = [
        ValidatorType('string'),
        ValidatorType('number'),
        ValidatorType('string'),
    ];

    describe('complete', function() {

        let property = Value(validator,
            (v)=>And(v),
            (v)=>MessageMap(v)
        );

        let validatable = property('data');

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

    let validator  = [
        ValidatorType('number'),
        ValidatorType('number'),
        ValidatorType('number'),
    ];

    let property = Value(validator, And, MessageMap);

    let validatable = property('data');

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

        let validator  = [
            ValidatorType('string'),
            ValidatorType('string'),
            ValidatorType('string'),
            Value([
                ValidatorType('string'),
                ValidatorType('string'),
            ], And, MessageMap)
        ];

        describe('complete', function() {

            let property = Value(validator, And, MessageMap);

            let validatable = property('data');

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

        let validator  = [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
            Value([
                ValidatorType('string'),
                ValidatorType('string'),
            ], And, MessageMap)
        ];

        describe('complete', function() {

            let property = Value(validator, And, MessageMap);

            let validatable = property('data');

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

        let validator  = [
            ValidatorType('number'),
            ValidatorType('number'),
            ValidatorType('number'),
            Value/*<unknown, number>*/([
                ValidatorType('number'),
                ValidatorType('number'),
            ], And, MessageMap)
        ];

        let property = Value/*<unknown, number>*/(validator, And, MessageMap);

        let validatable = property('data');

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
