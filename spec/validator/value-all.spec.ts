import ValueAll from "../../dist/validator/value-all-parameters";
import And from "../../dist/validatable/and-parameters";
import ValidatablesInterface from "../../dist/validatable/validatables/validatables";
import Validatables from "../../dist/validatable/validatables/validatables";
import Validatable from "@dikac/t-validatable/validatable";
import SimpleValidator from "@dikac/t-validator/simple";
import MessageMap from "../../dist/message/message/list/map";
import ValidatorType from "@dikac/t-type/validator/type-parameters";
import Instance from "@dikac/t-validator/validatable/dynamic";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("explicit type", function() {

        type TypeValidator = [
            SimpleValidator<any, string, Instance<any, string>>,
            SimpleValidator<any, string, Instance<any, string>>,
        ];

        let validator : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        describe("complete", function() {

            let property = ValueAll<any, string, TypeValidator>(validator, (v)=>And(<Validatable[]>v), MessageMap);

            let validatable = property('data');

            let key : Validatable = validatable[0];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

            describe("recursive", function() {

                let validator = ValidatorType('string');
                let list1 = ValueAll([validator], And, MessageMap);
                let list2 = ValueAll([list1], And, MessageMap);
                let list3 = ValueAll([list2], And, MessageMap);

            });
        });

        describe("auto", function() {

            let property = ValueAll(validator, (v)=>And(<Validatable[]>v), MessageMap);

            let validatable = property('data');

            let key : Validatable = validatable[0];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });
    });

    describe("implicit type", function() {

        let validator  = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        describe("complete", function() {

            let property = ValueAll<string>(validator, (v)=>And(<Validatable[]>v), MessageMap);

            let validatable = property('data');

            let key : Validatable = validatable[0];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });

        describe("auto", function() {

            let property = ValueAll(validator, (v)=>And(<Validatable[]>v), MessageMap);

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


describe("all valid", function() {


    let validator  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
    ];

    describe("complete", function() {

        let property = ValueAll(validator, (v)=>And(<Validatable[]>v), MessageMap);

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

                fail('index 0 should exits')
            }
        });

        it('index 1', ()=>{

            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(true);
                expect(typeof validatable.validatables[1].message).toBe('string');

            } else {

                fail('index 1 should exits')
            }
        });

        it('index 2', ()=>{

            if(validatable.validatables[2]) {

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

            } else {

                fail('index 2 should exits')
            }
        });

    });

});


describe("mixed", function() {


    let validator  = [
        ValidatorType('string'),
        ValidatorType('number'),
        ValidatorType('string'),
    ];

    describe("complete", function() {

        let property = ValueAll(validator, (v)=>And(<Validatable[]>v), MessageMap);

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

                fail('index 0 should exits')
            }
        });

        it('index 1', ()=>{

            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(false);
                expect(typeof validatable.validatables[1].message).toBe('string');

            } else {

                fail('index 1 should exits')
            }
        });

        it('index 2', ()=>{

            if(validatable.validatables[2]) {

                expect(validatable.validatables[2].valid).toBe(true);
                expect(typeof validatable.validatables[2].message).toBe('string');

            } else {

                fail('index 2 should exits')
            }
        });

    });

});

describe("all invalid", function() {

    let validator  = [
        ValidatorType('number'),
        ValidatorType('number'),
        ValidatorType('number'),
    ];

    let property = ValueAll(validator, (v)=>And(<Validatable[]>v), MessageMap);

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

            fail('index 0 should exits')
        }
    });

    it('index 1', ()=>{

        if(validatable.validatables[1]) {

            expect(validatable.validatables[1].valid).toBe(false);
            expect(typeof validatable.validatables[1].message).toBe('string');

        } else {

            fail('index 0 should exits')
        }
    });

    it('index 2', ()=>{

        if(validatable.validatables[2]) {

            expect(validatable.validatables[2].valid).toBe(false);
            expect(typeof validatable.validatables[2].message).toBe('string');

        } else {

            fail('index 0 should exits')
        }
    });

});


describe('recursive', ()=>{


    describe("all valid", function() {


        let validator  = [
            ValidatorType('string'),
            ValidatorType('string'),
            ValidatorType('string'),
            ValueAll([
                ValidatorType('string'),
                ValidatorType('string'),
            ], (v)=>And(v), MessageMap)
        ];

        describe("complete", function() {

            let property = ValueAll(validator, And, MessageMap);

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

                    fail('index 0 should exits')
                }
            });

            it('index 1', ()=>{

                if(validatable.validatables[1]) {

                    expect(validatable.validatables[1].valid).toBe(true);
                    expect(typeof validatable.validatables[1].message).toBe('string');

                } else {

                    fail('index 1 should exits')
                }
            });

            it('index 2', ()=>{

                if(validatable.validatables[2]) {

                    expect(validatable.validatables[2].valid).toBe(true);
                    expect(typeof validatable.validatables[2].message).toBe('string');

                } else {

                    fail('index 2 should exits')
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

                    fail('index 2 should exits')
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

                    fail('index 2 should exits')
                }
            });

            it('index 3.2', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                    fail('should exits')
                }
            });

        });

    });


    describe("mixed", function() {


        let validator  = [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
            ValueAll([
                ValidatorType('string'),
                ValidatorType('number'),
            ], And, MessageMap)
        ];

        describe("complete", function() {

            let property = ValueAll(validator, (v)=>And(<Validatable[]>v), MessageMap);

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

                    fail('index 0 should exits')
                }
            });

            it('index 1', ()=>{

                if(validatable.validatables[1]) {

                    expect(validatable.validatables[1].valid).toBe(false);
                    expect(typeof validatable.validatables[1].message).toBe('string');

                } else {

                    fail('index 1 should exits')
                }
            });

            it('index 2', ()=>{

                if(validatable.validatables[2]) {

                    expect(validatable.validatables[2].valid).toBe(true);
                    expect(typeof validatable.validatables[2].message).toBe('string');

                } else {

                    fail('index 2 should exits')
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

                    fail('index 2 should exits')
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

                    fail('index 2 should exits')
                }
            });

            it('index 3.2', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                    fail('index 2 should exits')
                }
            });

        });

    });

    describe("all invalid", function() {

        let validator  = [
            ValidatorType('number'),
            ValidatorType('number'),
            ValidatorType('number'),
            ValueAll([
                ValidatorType('number'),
                ValidatorType('number'),
            ], And, MessageMap)
        ];

        let property = ValueAll(validator, And, MessageMap);

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

                fail('index 0 should exits')
            }
        });

        it('index 1', ()=>{

            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(false);
                expect(typeof validatable.validatables[1].message).toBe('string');

            } else {

                fail('index 0 should exits')
            }
        });

        it('index 2', ()=>{

            if(validatable.validatables[2]) {

                expect(validatable.validatables[2].valid).toBe(false);
                expect(typeof validatable.validatables[2].message).toBe('string');

            } else {

                fail('index 0 should exits')
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

                fail('index 2 should exits')
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

                fail('index 2 should exits')
            }
        });

        it('index 3.2', ()=>{

            // @ts-expect-error
            if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                fail('index 2 should exits')
            }
        });

    });


})
