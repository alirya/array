import Map from "../../dist/validator/value-callback";
import ValidateValue from "../../dist/validator/return/list/value";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import Message from "@dikac/t-message/message";
import MessageMap from "../../dist/message/message/list/map";
import ValidatorType from "@dikac/t-type/validator/type-standard";
import ValidatableType from "@dikac/t-type/validatable/type";
import ValueInterface from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/parameter/instance/instance";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("explicit typed", function() {

        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];


        let validators : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        let value : string = 'name';

        describe("auto", function() {

            let validator = new Map(validators,
                (value, validators) => ValidateValue(value, validators, false),
                And, (v)=>MessageMap(v)
            );

            let validatable = validator.validate(value);

            let unknown : unknown = validatable.value;

            // @ts-expect-error
            let record : string = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            // @ts-expect-error
            instance = validatable.validatables[3];
            // @ts-expect-error
            instance = validatable.validatables[4];
        });

        describe("auto partial", function() {

            type ValidatableBundle = ValueInterface & Validatable & Message<string>;

            let validator = new Map(validators,
                (value, validators) => <[ValidatableBundle, ValidatableBundle]>ValidateValue(value, validators, true),
                And, (v)=>MessageMap(v)
            );

            let validatable = validator.validate(value);

            let unknown : unknown = validatable.value;
            // @ts-expect-error
            let string : string = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
              // @ts-expect-error
            instance = validatable.validatables[3];
              // @ts-expect-error
            instance = validatable.validatables[4];
        });
    });


    describe("explicit typed", function() {

        let validators  = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        let value  = 'name';


        describe("auto", function() {

            let validator = new Map(validators,
                (value, validators) => ValidateValue(value, validators, false),
                And, (v)=>MessageMap(v)
            );

            let validatable = validator.validate(value);

            let unknown : unknown = validatable.value;

            // @ts-expect-error
            let value1 : string[] = validatable.value;

            // @ts-expect-error
            let value2 : string = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });

        describe("auto partial", function() {

            let validator = new Map(validators,
                (value, validators) => <[ValidatableType, ValidatableType]>ValidateValue(value, validators, true),
                And, (v)=>MessageMap(v)
            );
            let validatable = validator.validate(value);

            let unknown : unknown = validatable.value;

            // @ts-expect-error
            let value1 : string[] = validatable.value;

            // @ts-expect-error
            let value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            // @ts-expect-error
            instance = validatable.validatables[3];
            // @ts-expect-error
            instance = validatable.validatables[4];
        });
    });

});



describe("explicit", function() {

    describe("all valid", function() {

        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        let validators : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        let value : string = 'user';

        describe("complete", function() {

            it(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    And, (v)=>MessageMap(v)
                );
                let validatable = validator.validate(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('value is type of "string"');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('value is type of "string"');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    Or, (v)=>MessageMap(v)
                );

                let validatable = validator.validate(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('value is type of "string"');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('value is type of "string"');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

        });

        describe("partial", function() {

            it(`and validation`, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) =>  <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValue(value, validators, true),
                    And, (v)=>MessageMap(v)
                );

                let validatable = validator.validate(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('value is type of "string"');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('value is type of "string"');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) =>  <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValue(value, validators, true),
                    Or, (v)=>MessageMap(v)
                );

                let validatable = validator.validate(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('value is type of "string"');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('value is type of "string"');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });
        });

    });

    describe("mixed", function() {


        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, number, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        let validators : TypeValidator= [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
        ];

        let value : string = 'name';

        describe("complete", function() {

            it(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>And(v), (v)=>MessageMap(v)
                );

                let and = validator.validate(value);

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(and.validatables[0].message).toBe('value is type of "string"');

                expect(and.validatables[1].valid).toBe(false);
                expect(and.validatables[1].message).toBe('value is not type of "number"');

                expect(and.validatables[2].valid).toBe(true);
                expect(and.validatables[2].message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
            });


            it(`or validation `, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>Or(v), (v)=>MessageMap(v)
                );

                let or = validator.validate(value);

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(or.validatables[0].message).toBe('value is type of "string"');
                expect(or.validatables[0].valid).toBe(true);

                expect(or.validatables[1].message).toBe('value is not type of "number"');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2].message).toBe('value is type of "string"');
                expect(or.validatables[2].valid).toBe(true);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);

            });
        });


        describe("partial", function() {

            it(`and validation`, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) =>  <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValue(value, validators, true),
                    (v)=>And(v), (v)=>MessageMap(v)
                );

                let and = validator.validate(value);

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(and.validatables[0].message).toBe('value is type of "string"');

                expect(and.validatables[1].valid).toBe(false);
                expect(and.validatables[1].message).toBe('value is not type of "number"');

                expect(and.validatables[2]).toBe(<any>undefined);

                // @ts-expect-error
                expect(and.validatables[3]).toBe(<any>undefined);
            });


            it(`or validation `, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) =>  <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValue(value, validators, true),
                    (v)=>Or(v), (v)=>MessageMap(v)
                );

                let or = validator.validate(value);

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(or.validatables[0].message).toBe('value is type of "string"');
                expect(or.validatables[0].valid).toBe(true);

                expect(or.validatables[1].message).toBe('value is not type of "number"');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2]).toBe(<any>undefined);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(<any>undefined);

            });
        });
    });

    describe("all invalid", function() {

        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, number, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        let validators : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
        ];

        let value : object = {};

        describe("complete", function() {
            it(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>And(v), (v)=>MessageMap(v)
                );

                let and = validator.validate(value);

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].message).toBe('value is not type of "string"');
                expect(and.validatables[0].valid).toBe(false);

                expect(and.validatables[1].message).toBe('value is not type of "number"');
                expect(and.validatables[1].valid).toBe(false);

                expect(and.validatables[2].message).toBe('value is not type of "string"');
                expect(and.validatables[2].valid).toBe(false);

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
            });

            it(`or validation `, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>Or(v), (v)=>MessageMap(v)
                );

                let or = validator.validate(value);

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(or.validatables[0].message).toBe('value is not type of "string"');
                expect(or.validatables[0].valid).toBe(false);

                expect(or.validatables[1].message).toBe('value is not type of "number"');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2].message).toBe('value is not type of "string"');
                expect(or.validatables[2].valid).toBe(false);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);
            });
        });


        describe("partial", function() {

            it(`and validation`, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) => <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValue(value, validators, true),
                    (v)=>And(v), (v)=>MessageMap(v)
                );
                let and = validator.validate(value);

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(false);
                expect(and.validatables[0].message).toBe('value is not type of "string"');

                expect(and.validatables[1]).toBe(<any>undefined);
                expect(and.validatables[2]).toBe(<any>undefined);
                // @ts-expect-error
                expect(and.validatables[3]).toBe(<any>undefined);
            });

            it(`or validation `, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) => <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValue(value, validators, true),
                    (v)=>Or(v), MessageMap
                );
                let or = validator.validate(value);

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(or.validatables[0].message).toBe('value is not type of "string"');
                expect(or.validatables[0].valid).toBe(false);

                expect(or.validatables[1]).toBe(<any>undefined);
                expect(or.validatables[2]).toBe(<any>undefined);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(<any>undefined);
            });
        });
    });
});




describe("recursive", function() {

    describe("all valid", function() {

        let validators  = [
            ValidatorType('string'),
            ValidatorType('string'),
            ValidatorType('string'),
            new Map([
                    ValidatorType('string'),
                    ValidatorType('string'),
                ],
                (value, validators) => ValidateValue(value, validators, false),
                And, (v)=>MessageMap(v))
        ];

        let value : string = 'user';

        describe("complete", function() {

            describe(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    And, (v)=>MessageMap(v)
                );
                let validatable = validator.validate(value);

                it('top level', ()=> {
                    expect(validatable.valid).toBe(true);
                    expect(validatable.value).toBe(value);

                    expect(validatable.validatables[0].valid).toBe(true);
                    expect(validatable.validatables[0].message).toBe('value is type of "string"');

                    expect(validatable.validatables[1].valid).toBe(true);
                    expect(validatable.validatables[1].message).toBe('value is type of "string"');

                    expect(validatable.validatables[2].valid).toBe(true);
                    expect(validatable.validatables[2].message).toBe('value is type of "string"');
                });

                it('index 3.0', ()=>{

                    // @ts-expect-error
                    if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {

                        // @ts-expect-error
                        expect(validatable.validatables[3].validatables[0].valid).toBe(true);
                        // @ts-expect-error
                        expect(validatable.validatables[3].validatables[0].message).toBe('value is type of "string"');

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
                        expect(validatable.validatables[3].validatables[1].message).toBe('value is type of "string"');

                    } else {

                        fail('index 2 should exits')
                    }
                });

                it('index 3.2', ()=>{

                    // @ts-expect-error
                    if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                        fail('should not exits')
                    }
                });
            });

            describe(`or validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    Or, (v)=>MessageMap(v)
                );

                let validatable = validator.validate(value);

                it('top level', ()=> {
                    expect(validatable.valid).toBe(true);
                    expect(validatable.value).toBe(value);

                    expect(validatable.validatables[0].valid).toBe(true);
                    expect(validatable.validatables[0].message).toBe('value is type of "string"');

                    expect(validatable.validatables[1].valid).toBe(true);
                    expect(validatable.validatables[1].message).toBe('value is type of "string"');

                    expect(validatable.validatables[2].valid).toBe(true);
                    expect(validatable.validatables[2].message).toBe('value is type of "string"');
                });

                it('index 3.0', ()=>{

                    // @ts-expect-error
                    if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {

                        // @ts-expect-error
                        expect(validatable.validatables[3].validatables[0].valid).toBe(true);
                        // @ts-expect-error
                        expect(validatable.validatables[3].validatables[0].message).toBe('value is type of "string"');

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
                        expect(validatable.validatables[3].validatables[1].message).toBe('value is type of "string"');

                    } else {

                        fail('index 2 should exits')
                    }
                });

                it('index 3.2', ()=>{

                    // @ts-expect-error
                    if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                        fail('should not exits')
                    }
                });
            });

        });

        describe("partial", function() {

            describe(`and validation`, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) =>  ValidateValue(value, validators, true),
                    And, (v)=>MessageMap(v)
                );

                let validatable = validator.validate(value);

                it('top level', ()=> {
                    expect(validatable.valid).toBe(true);
                    expect(validatable.value).toBe(value);

                    expect(validatable.validatables[0].valid).toBe(true);
                    expect(validatable.validatables[0].message).toBe('value is type of "string"');

                    expect(validatable.validatables[1].valid).toBe(true);
                    expect(validatable.validatables[1].message).toBe('value is type of "string"');

                    expect(validatable.validatables[2].valid).toBe(true);
                    expect(validatable.validatables[2].message).toBe('value is type of "string"');
                });

                it('index 3.0', ()=>{

                    // @ts-expect-error
                    if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {

                        // @ts-expect-error
                        expect(validatable.validatables[3].validatables[0].valid).toBe(true);
                        // @ts-expect-error
                        expect(validatable.validatables[3].validatables[0].message).toBe('value is type of "string"');

                    } else {

                        fail('should exits')
                    }
                });

                it('index 3.1', ()=>{

                    // @ts-expect-error
                    if(validatable.validatables[3] && validatable.validatables[3].validatables[1]) {

                        // @ts-expect-error
                        expect(validatable.validatables[3].validatables[1].valid).toBe(true);
                        // @ts-expect-error
                        expect(validatable.validatables[3].validatables[1].message).toBe('value is type of "string"');

                    } else {

                        fail('should exits')
                    }
                });

                it('index 3.2', ()=>{

                    // @ts-expect-error
                    if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                        fail('should not exits')
                    }
                });
            });

            describe(`or validation`, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, true),
                    Or, (v)=>MessageMap(v)
                );

                let validatable = validator.validate(value);

                it('top level', ()=> {
                    expect(validatable.valid).toBe(true);
                    expect(validatable.value).toBe(value);

                    expect(validatable.validatables[0].valid).toBe(true);
                    expect(validatable.validatables[0].message).toBe('value is type of "string"');

                    expect(validatable.validatables[1].valid).toBe(true);
                    expect(validatable.validatables[1].message).toBe('value is type of "string"');

                    expect(validatable.validatables[2].valid).toBe(true);
                    expect(validatable.validatables[2].message).toBe('value is type of "string"');
                });

                it('index 3.0', ()=>{

                    // @ts-expect-error
                    if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {

                        // @ts-expect-error
                        expect(validatable.validatables[3].validatables[0].valid).toBe(true);
                        // @ts-expect-error
                        expect(validatable.validatables[3].validatables[0].message).toBe('value is type of "string"');

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
                        expect(validatable.validatables[3].validatables[1].message).toBe('value is type of "string"');

                    } else {

                        fail('index 2 should exits')
                    }
                });

                it('index 3.2', ()=>{

                    // @ts-expect-error
                    if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                        fail('should not exits')
                    }
                });
            });
        });

    });

    describe("mixed", function() {

        let validators  = [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
            new Map([
                    ValidatorType('number'),
                    ValidatorType('string'),
            ], (value, validators) => ValidateValue(value, validators, false), And, (v)=>MessageMap(v))
        ];

        let value : string = 'name';

        describe("complete", function() {

            describe(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>And(v), (v)=>MessageMap(v)
                );

                let and = validator.validate(value);

                it(`top level`, () => {
                    expect(and.valid).toBe(false);
                    expect(and.value).toBe(value);

                    expect(and.validatables[0].valid).toBe(true);
                    expect(and.validatables[0].message).toBe('value is type of "string"');

                    expect(and.validatables[1].valid).toBe(false);
                    expect(and.validatables[1].message).toBe('value is not type of "number"');

                    expect(and.validatables[2].valid).toBe(true);
                    expect(and.validatables[2].message).toBe('value is type of "string"');
                });

                it('index 3.0', ()=>{

                    // @ts-expect-error
                    if(and.validatables[3] && and.validatables[3].validatables[0]) {

                        // @ts-expect-error
                        expect(and.validatables[3].validatables[0].valid).toBe(false);
                        // @ts-expect-error
                        expect(typeof and.validatables[3].validatables[0].message).toBe('string');

                    } else {

                        fail('index 2 should exits')
                    }
                });

                it('index 3.1', ()=>{

                    // @ts-expect-error
                    if(and.validatables[3] && and.validatables[3].validatables[1]) {

                        // @ts-expect-error
                        expect(and.validatables[3].validatables[1].valid).toBe(true);
                        // @ts-expect-error
                        expect(typeof and.validatables[3].validatables[1].message).toBe('string');

                    } else {

                        fail('index 2 should exits')
                    }
                });

                it('index 3.2', ()=>{

                    // @ts-expect-error
                    if(and.validatables[3] && and.validatables[3].validatables[2]) {

                        fail('should not exits')
                    }
                });
            });


            describe(`or validation `, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>Or(v), (v)=>MessageMap(v)
                );

                let or = validator.validate(value);

                it('top level', ()=> {
                    expect(or.valid).toBe(true);
                    expect(or.value).toBe(value);

                    expect(or.validatables[0].message).toBe('value is type of "string"');
                    expect(or.validatables[0].valid).toBe(true);

                    expect(or.validatables[1].message).toBe('value is not type of "number"');
                    expect(or.validatables[1].valid).toBe(false);

                    expect(or.validatables[2].message).toBe('value is type of "string"');
                    expect(or.validatables[2].valid).toBe(true);
                });

                it('index 3.0', ()=>{

                    // @ts-expect-error
                    if(or.validatables[3] && or.validatables[3].validatables[0]) {

                        // @ts-expect-error
                        expect(or.validatables[3].validatables[0].valid).toBe(false);
                        // @ts-expect-error
                        expect(typeof or.validatables[3].validatables[0].message).toBe('string');

                    } else {

                        fail('index 2 should exits')
                    }
                });

                it('index 3.1', ()=>{

                    // @ts-expect-error
                    if(or.validatables[3] && or.validatables[3].validatables[1]) {

                        // @ts-expect-error
                        expect(or.validatables[3].validatables[1].valid).toBe(true);
                        // @ts-expect-error
                        expect(typeof or.validatables[3].validatables[1].message).toBe('string');

                    } else {

                        fail('index 2 should exits')
                    }
                });

                it('index 3.2', ()=>{

                    // @ts-expect-error
                    if(or.validatables[3] && or.validatables[3].validatables[2]) {

                        fail('should not exits')
                    }
                });

            });
        });


        describe("partial", function() {

            describe(`and validation`, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) =>  ValidateValue(value, validators, true),
                    (v)=>And(v), (v)=>MessageMap(v)
                );

                let and = validator.validate(value);

                it('top level', ()=> {
                    expect(and.valid).toBe(false);
                    expect(and.value).toBe(value);

                    expect(and.validatables[0].valid).toBe(true);
                    expect(and.validatables[0].message).toBe('value is type of "string"');

                    expect(and.validatables[1].valid).toBe(false);
                    expect(and.validatables[1].message).toBe('value is not type of "number"');

                    expect(and.validatables[2]).toBe(<any>undefined);
                    expect(and.validatables[3]).toBe(<any>undefined);
                });
            });


            describe(`or validation `, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, true),
                    (v)=>Or(v), (v)=>MessageMap(v)
                );

                let or = validator.validate(value);

                it('top level', ()=> {
                    expect(or.valid).toBe(true);
                    expect(or.value).toBe(value);

                    expect(or.validatables[0].message).toBe('value is type of "string"');
                    expect(or.validatables[0].valid).toBe(true);

                    expect(or.validatables[1].message).toBe('value is not type of "number"');
                    expect(or.validatables[1].valid).toBe(false);

                    expect(or.validatables[2]).toBe(<any>undefined);
                    expect(or.validatables[3]).toBe(<any>undefined);
                });
            });
        });
    });

    describe("all invalid", function() {

        let validators = [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
            new Map([
                ValidatorType('number'),
                ValidatorType('string'),
            ], (value, validators) => ValidateValue(value, validators, false), And, (v)=>MessageMap(v))
        ];

        let value : object = {};

        describe("complete", function() {

            describe(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>And(v), (v)=>MessageMap(v)
                );

                let and = validator.validate(value);

                it('top level', ()=> {

                    expect(and.valid).toBe(false);
                    expect(and.value).toEqual(value);

                    expect(typeof and.validatables[0].message).toBe('string');
                    expect(and.validatables[0].valid).toBe(false);

                    expect(typeof and.validatables[1].message).toBe('string');
                    expect(and.validatables[1].valid).toBe(false);

                    expect(typeof and.validatables[2].message).toBe('string');
                    expect(and.validatables[2].valid).toBe(false);
                });

                it('index 3.0', ()=>{

                    // @ts-expect-error
                    if(and.validatables[3] && and.validatables[3].validatables[0]) {

                        // @ts-expect-error
                        expect(and.validatables[3].validatables[0].valid).toBe(false);
                        // @ts-expect-error
                        expect(typeof and.validatables[3].validatables[0].message).toBe('string');

                    } else {

                        fail('index 2 should exits')
                    }
                });

                it('index 3.1', ()=>{

                    // @ts-expect-error
                    if(and.validatables[3] && and.validatables[3].validatables[1]) {

                        // @ts-expect-error
                        expect(and.validatables[3].validatables[1].valid).toBe(false);
                        // @ts-expect-error
                        expect(typeof and.validatables[3].validatables[1].message).toBe('string');

                    } else {

                        fail('index 2 should exits')
                    }
                });

                it('index 3.2', ()=>{

                    // @ts-expect-error
                    if(and.validatables[3] && and.validatables[3].validatables[2]) {

                        fail('should not exits')
                    }
                });
            });

            describe(`or validation `, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>Or(v), (v)=>MessageMap(v)
                );

                let or = validator.validate(value);

                it('top level', ()=> {
                    expect(or.valid).toBe(false);
                    expect(or.value).toEqual(value);

                    expect(typeof or.validatables[0].message).toBe('string');
                    expect(or.validatables[0].valid).toBe(false);

                    expect(typeof or.validatables[1].message).toBe('string');
                    expect(or.validatables[1].valid).toBe(false);

                    expect(typeof or.validatables[2].message).toBe('string');
                    expect(or.validatables[2].valid).toBe(false);
                });

                it('index 3.0', ()=>{

                    // @ts-expect-error
                    if(or.validatables[3] && or.validatables[3].validatables[0]) {

                        // @ts-expect-error
                        expect(or.validatables[3].validatables[0].valid).toBe(false);
                        // @ts-expect-error
                        expect(typeof or.validatables[3].validatables[0].message).toBe('string');

                    } else {

                        fail('should exits')
                    }
                });

                it('index 3.1', ()=>{

                    // @ts-expect-error
                    if(or.validatables[3] && or.validatables[3].validatables[1]) {

                        // @ts-expect-error
                        expect(or.validatables[3].validatables[1].valid).toBe(false);
                        // @ts-expect-error
                        expect(typeof or.validatables[3].validatables[1].message).toBe('string');

                    } else {

                        fail('should exits')
                    }
                });

                it('index 3.2', ()=>{

                    // @ts-expect-error
                    if(or.validatables[3] && or.validatables[3].validatables[2]) {

                        fail('should not exits')
                    }
                });
            });
        });


        describe("partial", function() {

            describe(`and validation`, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, true),
                    (v)=>And(v), (v)=>MessageMap(v)
                );
                let and = validator.validate(value);

                it(`top level`, () => {
                    expect(and.valid).toBe(false);
                    expect(and.value).toEqual(value);

                    expect(and.validatables[0].valid).toBe(false);
                    expect(and.validatables[0].message).toBe('value is not type of "string"');

                    expect(and.validatables[1]).toBe(<any>undefined);
                    expect(and.validatables[2]).toBe(<any>undefined);
                    expect(and.validatables[3]).toBe(<any>undefined);
                });
            });

            describe(`or validation `, () => {

                type ValidatableBundle = ValueInterface & Validatable & Message<string>;

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, true),
                    (v)=>Or(v), MessageMap
                );
                let or = validator.validate(value);

                it('top level', ()=> {
                    expect(or.valid).toBe(false);
                    expect(or.value).toEqual(value);

                    expect(or.validatables[0].message).toBe('value is not type of "string"');
                    expect(or.validatables[0].valid).toBe(false);

                    expect(or.validatables[1]).toBe(<any>undefined);
                    expect(or.validatables[2]).toBe(<any>undefined);
                    expect(or.validatables[3]).toBe(<any>undefined);
                });
            });
        });
    });
});
