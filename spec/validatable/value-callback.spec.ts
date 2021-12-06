// import Value from "../../dist/validatable/value-callback-parameters";
// import ValidateValue from "../../dist/validator/validatable/list/value-parameters";
// import ValidateValuePartial from "../../dist/validator/validatable/list/value-partial-parameters";
// import And from "../../dist/validatable/and-parameters";
// import Or from "../../dist/validatable/or-parameters";
// import Validatables from "../../dist/validatable/callback-parameters";
// import Validatable from "@dikac/t-validatable/validatable";
// import ValidatableInterface from "@dikac/t-validatable/validatable";
// import SimpleValidator from "@dikac/t-validator/simple";
// import ValueInterface from "@dikac/t-value/value";
// import Message from "@dikac/t-message/message";
// import MessageMap from "../../dist/message/message/list/map";
// import MessageInterface from "@dikac/t-message/message";
// import ValidatorType from "@dikac/t-type/validator/type-parameters";
// import Instance from "@dikac/t-validator/validatable/dynamic";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// describe("compiler compatibility", function() {
//
//     let validator = [
//         ValidatorType('string'),
//         ValidatorType('string'),
//     ];
//
//     describe("implicit complete", function() {
//
//         let validatable = new Value('data', validator, ValidateValue, And, MessageMap);
//
//         let key : Validatable = validatable[0];
//
//
//         let list : Validatable[] = validatable.validatables;
//         let and : Validatables = validatable.validatable;
//
//         let unknown : unknown = validatable.value;
//
//         let string : string = validatable.value;
//
//     });
//
//     describe("explicit complete", function() {
//
//         let validatable = new Value<
//             string,
//             SimpleValidator<any, string, Instance<any, string>>[],
//             (ValidatableInterface & ValueInterface & Message<string>)[],
//             string[],
//             ValidatableInterface
//             >
//         ('data', validator, (value, validators) =>
//             ValidateValue(value, validators), And, (v)=>MessageMap(v));
//
//         let unknown : unknown = validatable.value;
//         let string : string = validatable.value;
//
//     });
//
//     describe("implicit partial", function() {
//
//         let validatable = new Value('data', validator,
//             (value, validators) => <(ValidatableInterface & ValueInterface & Message<string>)[]> ValidateValuePartial(value, validators),
//             (v)=>And(<Validatable[]>v), (v)=>MessageMap(v)
//         );
//
//         let unknown : unknown = validatable.value;
//
//         let string : string = validatable.value;
//
//     });
//
//     describe("explicit complete", function() {
//
//         let validatable = new Value<
//             string,
//             SimpleValidator<any, string, Instance<any, string>>[],
//             (ValidatableInterface & MessageInterface & ValueInterface)[],
//             ValidatableInterface
//             >
//         ('data', validator,
//             (value, validators) => <(ValidatableInterface & ValueInterface & Message<string>)[]> ValidateValuePartial(value, <any>validators),
//             And, (v)=><any>MessageMap(v)
//         );
//
//         let unknown : unknown = validatable.value;
//         let string : string = validatable.value;
//
//     });
// });
//
//
// describe("implicit complete", function() {
//
//     describe("all valid", function() {
//
//         let validator = [
//             ValidatorType('string'),
//             ValidatorType('string'),
//             ValidatorType('string'),
//         ];
//
//         let value = 'data';
//
//         it(`and validation`, () => {
//
//             let validatable = new Value(value, validator,
//                 (value, validators) => ValidateValue(value, validators),
//                 And, MessageMap
//             );
//
//             expect(validatable.valid).toBe(true);
//             expect(validatable.value).toBe(value);
//
//             expect(validatable.validatables[0].valid).toBe(true);
//             expect(typeof validatable.validatables[0].message).toBe('string');
//
//             expect(validatable.validatables[1].valid).toBe(true);
//             expect(typeof validatable.validatables[1].message).toBe('string');
//
//             expect(validatable.validatables[2].valid).toBe(true);
//             expect(typeof validatable.validatables[2].message).toBe('string');
//         });
//
//
//         it(`or validation`, () => {
//
//             let validatable = new Value(value, validator,
//                 (value, validators) => ValidateValue(value, validators),
//                 Or, (v)=>MessageMap(v)
//             );
//
//             expect(validatable.valid).toBe(true);
//             expect(validatable.value).toBe(value);
//
//             expect(validatable.validatables[0].valid).toBe(true);
//             expect(typeof validatable.validatables[0].message).toBe('string');
//
//             expect(validatable.validatables[1].valid).toBe(true);
//             expect(typeof validatable.validatables[1].message).toBe('string');
//
//             expect(validatable.validatables[2].valid).toBe(true);
//             expect(typeof validatable.validatables[2].message).toBe('string');
//         });
//
//     });
//
//
//     describe("mixed", function() {
//
//         let value = 'data';
//
//         let validator = [
//             ValidatorType('string'),
//             ValidatorType('number'),
//             ValidatorType('string'),
//         ];
//
//         it(`and validation`, () => {
//
//             let and = new Value(value, validator,
//                 (value, validators) => <any>ValidateValue(value, <any>validators),
//                 And, (v)=>MessageMap(v)
//             );
//
//             expect(and.valid).toBe(false);
//
//             expect(and.validatables[0].valid).toBe(true);
//             expect(typeof and.validatables[0].message).toBe('string');
//
//             expect(and.validatables[1].valid).toBe(false);
//             expect(typeof and.validatables[1].message).toBe('string');
//
//             expect(and.validatables[2].valid).toBe(true);
//             expect(typeof and.validatables[2].message).toBe('string');
//
//             expect(and.value).toBe('data');
//         });
//
//
//         it(`or validation `, () => {
//
//             let or = new Value(value, validator,
//                 (value, validators) => <any>ValidateValue(value, <any>validators),
//                 Or, (v)=>MessageMap(v)
//             );
//
//             expect(or.valid).toBe(true);
//             expect(or.value).toBe('data');
//
//             expect(typeof or.validatables[0].message).toBe('string');
//             expect(or.validatables[0].valid).toBe(true);
//
//             expect(typeof or.validatables[1].message).toBe('string');
//             expect(or.validatables[1].valid).toBe(false);
//
//             expect(typeof or.validatables[2].message).toBe('string');
//             expect(or.validatables[2].valid).toBe(true);
//
//         });
//     });
//
//
//     describe("all invalid", function() {
//
//         let value = {};
//
//         let validator = [
//             ValidatorType('string'),
//             ValidatorType('number'),
//             ValidatorType('string'),
//         ];
//
//         let and = new Value(value, validator,
//             (value, validators) => ValidateValue(value, validators),
//             And, (v)=>MessageMap(v)
//         );
//
//         it(`and validation`, () => {
//
//             expect(and.valid).toBe(false);
//             expect(and.value).toEqual({});
//
//             expect(and.validatables[0].valid).toBe(false);
//             expect(typeof and.validatables[0].message).toBe('string');
//
//             expect(and.validatables[1].valid).toBe(false);
//             expect(typeof and.validatables[1].message).toBe('string');
//
//             expect(and.validatables[2].valid).toBe(false);
//             expect(typeof and.validatables[2].message).toBe('string');
//         });
//
//         it(`or validation `, () => {
//
//             let or = new Value(value, validator,
//                 (value, validators) => ValidateValue(value, validators),
//                 Or, (v)=>MessageMap(v)
//             );
//
//             expect(or.valid).toBe(false);
//             expect(or.value).toEqual({});
//
//             expect(typeof or.validatables[0].message).toBe('string');
//             expect(or.validatables[0].valid).toBe(false);
//
//             expect(typeof or.validatables[1].message).toBe('string');
//             expect(or.validatables[1].valid).toBe(false);
//
//             expect(typeof or.validatables[2].message).toBe('string');
//             expect(or.validatables[2].valid).toBe(false);
//         });
//     });
// });
//
//
// describe("implicit incomplete", function() {
//
//     describe("all valid", function() {
//
//         let validator = [
//             ValidatorType('string'),
//             ValidatorType('string'),
//             ValidatorType('string'),
//         ];
//
//         let value = 'data';
//
//         it(`and validation`, () => {
//
//             let validatable = new Value(value, validator,
//                 (value, validators) => <(ValidatableInterface & ValueInterface & Message<string>)[]>ValidateValuePartial(value, validators),
//                 And, (v)=>MessageMap(v)
//             );
//
//             expect(validatable.valid).toBe(true);
//             expect(validatable.value).toBe(value);
//
//             if(validatable.validatables[0]) {
//
//                 expect(validatable.validatables[0].valid).toBe(true);
//                 expect(typeof validatable.validatables[0].message).toBe('string');
//
//             } else {
//
//                 fail('validatable.validatables.name should exist');
//             }
//
//
//             if(validatable.validatables[1]) {
//
//                 expect(validatable.validatables[1].valid).toBe(true);
//                 expect(typeof validatable.validatables[1].message).toBe('string');
//
//             } else {
//
//                 fail('validatable.validatables.address should exist');
//             }
//
//
//             if(validatable.validatables[2]) {
//
//                 expect(validatable.validatables[2].valid).toBe(true);
//                 expect(typeof validatable.validatables[2].message).toBe('string');
//
//             } else {
//
//                 fail('validatable.validatables.user should exist');
//             }
//         });
//
//
//         it(`or validation`, () => {
//
//             let validatable = new Value(value, validator,
//                 (value, validators) => <(ValidatableInterface & ValueInterface & Message<string>)[]>ValidateValuePartial(value, validators),
//                 Or, (v)=>MessageMap(v)
//             );
//
//             expect(validatable.valid).toBe(true);
//             expect(validatable.value).toBe(value);
//
//             if(validatable.validatables[0]) {
//
//                 expect(validatable.validatables[0].valid).toBe(true);
//                 expect(typeof validatable.validatables[0].message).toBe('string');
//
//             } else {
//
//                 fail('validatable.validatables.name should exist');
//             }
//
//
//             if(validatable.validatables[1]) {
//
//                 expect(validatable.validatables[1].valid).toBe(true);
//                 expect(typeof validatable.validatables[1].message).toBe('string');
//
//             } else {
//
//                 fail('validatable.validatables.address should exist');
//             }
//
//
//             if(validatable.validatables[2]) {
//
//                 expect(validatable.validatables[2].valid).toBe(true);
//                 expect(typeof validatable.validatables[2].message).toBe('string');
//
//             } else {
//
//                 fail('validatable.validatables.user should exist');
//             }
//         });
//     });
//
//
//     describe("mixed", function() {
//
//         let validator = [
//             ValidatorType('string'),
//             ValidatorType('number'),
//             ValidatorType('string'),
//         ];
//
//         it(`and validation`, () => {
//
//             let and = new Value('data', validator,
//                 (value, validators) => <(ValidatableInterface & ValueInterface & Message<string>)[]> ValidateValuePartial(value, <any>validators),
//                 And, (v)=>MessageMap(v)
//             );
//
//             expect(and.valid).toBe(false);
//             expect(and.value).toBe('data');
//
//             if(and.validatables[0]) {
//                 expect(and.validatables[0].valid).toBe(true);
//                 expect(typeof and.validatables[0].message).toBe('string');
//
//             } else {
//                 fail('validatable.validatables.name should exist');
//             }
//
//             if(and.validatables[1]) {
//                 expect(and.validatables[1].valid).toBe(false);
//                 expect(typeof and.validatables[1].message).toBe('string');
//
//             } else {
//                 fail('validatable.validatables.age should exist');
//             }
//
//             if(and.validatables[2]) {
//                 fail('validatable.validatables.address should exist');
//             }
//         });
//
//
//         it(`or validation `, () => {
//
//             let or = new Value('data', validator,
//                 (value, validators) => <(ValidatableInterface & ValueInterface & Message<string>)[]> ValidateValuePartial(value, <any>validators),
//                 Or, (v)=>MessageMap(v)
//             );
//
//             expect(or.value).toBe('data');
//             expect(or.valid).toBe(true);
//
//             if(or.validatables[0]) {
//                 expect(typeof or.validatables[0].message).toBe('string');
//                 expect(or.validatables[0].valid).toBe(true);
//             } else {
//                 fail('validatable.validatables.name should exist');
//             }
//
//             if(or.validatables[1]) {
//                 expect(typeof or.validatables[1].message).toBe('string');
//                 expect(or.validatables[1].valid).toBe(false);
//             } else {
//                 fail('validatable.validatables.age should exist');
//             }
//
//             if(or.validatables[2]) {
//                 fail('validatable.validatables.address should exist');
//             }
//         });
//     });
//
//     describe("all invalid", function() {
//
//         let validator = [
//             ValidatorType('string'),
//             ValidatorType('number'),
//             ValidatorType('string'),
//         ];
//
//         it(`and validation`, () => {
//
//             let and = new Value({}, validator,
//                 (value, validators) => <(ValidatableInterface & ValueInterface & Message<string>)[]> ValidateValuePartial(value, validators),
//                 And, (v)=>MessageMap(v)
//             );
//
//             expect(and.valid).toBe(false);
//             expect(and.value).toEqual({});
//
//             if(and.validatables[0]) {
//
//                 expect(and.validatables[0].valid).toBe(false);
//                 expect(typeof and.validatables[0].message).toBe('string');
//
//             } else {
//                 fail('validatable.validatables.name should exist');
//             }
//
//             if(and.validatables[1]) {
//                 fail('validatable.validatables.age should not exist');
//             }
//
//             if(and.validatables[2]) {
//                 fail('validatable.validatables.address should not exist');
//             }
//         });
//
//         it(`or validation `, () => {
//
//             let or = new Value({}, validator,
//                 (value, validators) => <(ValidatableInterface & ValueInterface & Message<string>)[]> ValidateValuePartial(value, validators),
//                 Or, MessageMap
//             );
//
//             expect(or.value).toEqual({});
//             expect(or.valid).toBe(false);
//
//             if(or.validatables[0]) {
//                 expect(typeof or.validatables[0].message).toBe('string');
//                 expect(or.validatables[0].valid).toBe(false);
//             } else {
//                 fail('validatable.validatables.name should exist');
//             }
//
//             if(or.validatables[1]) {
//                 fail('validatable.validatables.age should not exist');
//             }
//
//             if(or.validatables[2]) {
//                 fail('validatable.validatables.address should not exist');
//             }
//
//         });
//     });
// });
//
