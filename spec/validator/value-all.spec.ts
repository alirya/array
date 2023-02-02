import ValueAll from '../../dist/validator/value-all';
import And from '../../dist/validatable/and';
import ValidatablesInterface from '../../dist/validatable/validatables/validatables';
import Validatables from '../../dist/validatable/validatables/validatables';
import Validatable from '@alirya/validatable/validatable';
import SimpleValidator from '@alirya/validator/simple';
import MessageMap from '../../dist/message/message/list/map';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('explicit type', function() {

        type TypeValidator = [
            SimpleValidator<any, string, string>,
            SimpleValidator<any, string, string>,
        ];

        let validator : TypeValidator = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        describe('complete', function() {

            let property = ValueAll.Parameters<any, string, TypeValidator>(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

            let validatable = property('data');

            let key : Validatable = validatable[0];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

            it('recursive', function() {

                let validator = TypeParameters('string');
                let list1 = ValueAll.Parameters([validator], And.Parameters, MessageMap);
                let list2 = ValueAll.Parameters([list1], And.Parameters, MessageMap);
                let list3 = ValueAll.Parameters([list2], And.Parameters, MessageMap);

            });
        });

        it('auto', function() {

            let property = ValueAll.Parameters(validator, (v)=>And.Parameters(<[Validatable, Validatable]>v), MessageMap);

            let validatable = property('data');

            let key : Validatable = validatable[0];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });
    });

    describe('implicit type', function() {

        let validator  = [
            TypeParameters('string'),
            TypeParameters('string'),
        ];

        it('complete', function() {

            let property = ValueAll.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

            let validatable = property('data');

            let key : Validatable = validatable[0];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });

        it('auto', function() {

            let property = ValueAll.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

            let validatable = property('data');

            let key : Validatable = validatable[0];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });
    });
});


describe('all valid', function() {


    let validator  = [
        TypeParameters('string'),
        TypeParameters('string'),
        TypeParameters('string'),
    ];

    describe('complete', function() {

        let property = ValueAll.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

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
        TypeParameters('string'),
        TypeParameters('number'),
        TypeParameters('string'),
    ];

    describe('complete', function() {

        let property = ValueAll.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

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

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

            } else {

                fail('index 2 should exits');
            }
        });

    });

});

describe('all invalid', function() {

    let validator  = [
        TypeParameters('number'),
        TypeParameters('number'),
        TypeParameters('number'),
    ];

    let property = ValueAll.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

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

            expect(validatable.validatables[1].valid).toBe(false);
            expect(typeof validatable.validatables[1].message).toBe('string');

        } else {

            fail('index 0 should exits');
        }
    });

    it('index 2', ()=>{

        if(validatable.validatables[2]) {

            expect(validatable.validatables[2].valid).toBe(false);
            expect(typeof validatable.validatables[2].message).toBe('string');

        } else {

            fail('index 0 should exits');
        }
    });

});


describe('recursive', ()=>{


    describe('all valid', function() {


        let validator  = [
            TypeParameters('string'),
            TypeParameters('string'),
            TypeParameters('string'),
            ValueAll.Parameters([
                TypeParameters('string'),
                TypeParameters('string'),
            ], (v)=>And.Parameters(v), MessageMap)
        ];

        describe('complete', function() {

            let property = ValueAll.Parameters(validator, And.Parameters, MessageMap);

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

                    fail('should exits');
                }
            });

        });

    });


    describe('mixed', function() {


        let validator  = [
            TypeParameters('string'),
            TypeParameters('number'),
            TypeParameters('string'),
            ValueAll.Parameters([
                TypeParameters('string'),
                TypeParameters('number'),
            ], And.Parameters, MessageMap)
        ];

        describe('complete', function() {

            let property = ValueAll.Parameters(validator, (v)=>And.Parameters(<Validatable[]>v), MessageMap);

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
                    expect(validatable.validatables[3].validatables[1].valid).toBe(false);
                    // @ts-expect-error
                    expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');

                } else {

                    fail('index 2 should exits');
                }
            });

            it('index 3.2', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                    fail('index 2 should exits');
                }
            });

        });

    });

    describe('all invalid', function() {

        let validator  = [
            TypeParameters('number'),
            TypeParameters('number'),
            TypeParameters('number'),
            ValueAll.Parameters([
                TypeParameters('number'),
                TypeParameters('number'),
            ], And.Parameters, MessageMap)
        ];

        let property = ValueAll.Parameters(validator, And.Parameters, MessageMap);

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

                expect(validatable.validatables[1].valid).toBe(false);
                expect(typeof validatable.validatables[1].message).toBe('string');

            } else {

                fail('index 0 should exits');
            }
        });

        it('index 2', ()=>{

            if(validatable.validatables[2]) {

                expect(validatable.validatables[2].valid).toBe(false);
                expect(typeof validatable.validatables[2].message).toBe('string');

            } else {

                fail('index 0 should exits');
            }
        });


        it('index 3.0', ()=>{

            // @ts-expect-error
            if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {

                // @ts-expect-error
                expect(validatable.validatables[3].validatables[0].valid).toBe(false);
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
                expect(validatable.validatables[3].validatables[1].valid).toBe(false);
                // @ts-expect-error
                expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');

            } else {

                fail('index 2 should exits');
            }
        });

        it('index 3.2', ()=>{

            // @ts-expect-error
            if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                fail('index 2 should exits');
            }
        });

    });


});
