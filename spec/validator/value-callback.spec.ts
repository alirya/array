// import ValueCallback from "../../dist/validator/value-callback-parameters";
// import ValidateValue from "../../dist/validator/validatable/list/value-parameters";
// import ValidateValuePartial from "../../dist/validator/validatable/list/value-partial-parameters";
// import And from "../../dist/validatable/and-parameters";
// import Or from "../../dist/validatable/or-parameters";
// import Validatable from "@alirya/validatable/validatable";
// import SimpleValidator from "@alirya/validator/simple";
// import Message from "@alirya/message/message";
// import MessageMap from "../../dist/message/message/list/map";
// import ValidatorType from "@alirya/type/validator/type-parameters";
// import {TypeType as ValidatableType} from "@alirya/type/validatable/type-parameters";
// import ValueInterface from "@alirya/value/value";
// import Instance from "@alirya/validator/validatable/dynamic";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// describe("compiler compatibility", function() {
//
//     describe("explicit typed", function() {
//
//         type TypeValidator = [
//             SimpleValidator<any, string, Instance<any, string>>,
//             SimpleValidator<any, string, Instance<any, string>>,
//         ];
//
//
//         let validators : TypeValidator = [
//             ValidatorType('string'),
//             ValidatorType('string'),
//         ];
//
//         let value : string = 'name';
//
//         describe("auto", function() {
//
//             let validator = ValueCallback(validators, ValidateValue, And, MessageMap);
//
//             let validatable = validator(value);
//
//             let unknown : unknown = validatable.value;
//
//             let record : string = validatable.value;
//
//             let instance : Validatable;
//             instance = validatable.validatables[0];
//             instance = validatable.validatables[1];
//             // @ts-expecerror
//             instance = validatable.validatables[3];
//             // @ts-expecerror
//             instance = validatable.validatables[4];
//
//             describe("recursive", function() {
//
//                 let validator = ValidatorType('string');
//                 let list1 = ValueCallback([validator], ValidateValue, And, MessageMap);
//                 let list2 = ValueCallback([list1], ValidateValue, And, MessageMap);
//                 let list3 = ValueCallback([list2], ValidateValue, And, MessageMap);
//
//             });
//         });
//
//         describe("auto partial", function() {
//
//             type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//             let validator = ValueCallback(validators,
//                 (value, validators) => <[ValidatableBundle, ValidatableBundle]>ValidateValuePartial(value, validators),
//                 And, (v)=>MessageMap(v)
//             );
//
//             let validatable = validator(value);
//
//             let unknown : unknown = validatable.value;
//
//             let string : string = validatable.value;
//
//             let instance : Validatable;
//             instance = validatable.validatables[0];
//             instance = validatable.validatables[1];
//               // @ts-expecerror
//             instance = validatable.validatables[3];
//               // @ts-expecerror
//             instance = validatable.validatables[4];
//         });
//     });
//
//
//     describe("explicit typed", function() {
//
//         let validators  = [
//             ValidatorType('string'),
//             ValidatorType('string'),
//         ];
//
//         let value  = 'name';
//
//
//         describe("auto", function() {
//
//             let validator = ValueCallback(validators,
//                 (value, validators) => ValidateValue(value, validators),
//                 And, (v)=>MessageMap(v)
//             );
//
//             let validatable = validator(value);
//
//             let unknown : unknown = validatable.value;
//
//             // @ts-expecerror
//             let value1 : string[] = validatable.value;
//
//             let value2 : string = validatable.value;
//
//             let instance : Validatable;
//             instance = validatable.validatables[0];
//             instance = validatable.validatables[1];
//             instance = validatable.validatables[3];
//             instance = validatable.validatables[4];
//         });
//
//         describe("auto partial", function() {
//
//             let validator = ValueCallback(validators,
//                 (value, validators) => <[ValidatableType, ValidatableType]>ValidateValuePartial(value, validators),
//                 And, (v)=>MessageMap(v)
//             );
//             let validatable = validator(value);
//
//             let unknown : unknown = validatable.value;
//
//             // @ts-expecerror
//             let value1 : string[] = validatable.value;
//
//             // @ts-expecerror
//             let value2 : [string, string] = validatable.value;
//
//             let instance : Validatable;
//             instance = validatable.validatables[0];
//             instance = validatable.validatables[1];
//             // @ts-expecerror
//             instance = validatable.validatables[3];
//             // @ts-expecerror
//             instance = validatable.validatables[4];
//         });
//     });
//
// });
//
//
//
// describe("explicit", function() {
//
//     describe("all valid", function() {
//
//         type TypeValidator = [
//             SimpleValidator<any, string, Instance<any, string>>,
//             SimpleValidator<any, string, Instance<any, string>>,
//             SimpleValidator<any, string, Instance<any, string>>,
//         ];
//
//         let validators : TypeValidator = [
//             ValidatorType('string'),
//             ValidatorType('string'),
//             ValidatorType('string'),
//         ];
//
//         let value : string = 'user';
//
//         describe("complete", function() {
//
//             it(`and validation`, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     And, (v)=>MessageMap(v)
//                 );
//                 let validatable = validator(value);
//
//                 expect(validatable.valid).toBe(true);
//                 expect(validatable.value).toBe(value);
//
//                 expect(validatable.validatables[0].valid).toBe(true);
//                 expect(typeof validatable.validatables[0].message).toBe('string');
//
//                 expect(validatable.validatables[1].valid).toBe(true);
//                 expect(typeof validatable.validatables[1].message).toBe('string');
//
//                 expect(validatable.validatables[2].valid).toBe(true);
//                 expect(typeof validatable.validatables[2].message).toBe('string');
//
//                 // @ts-expecerror
//                 expect(validatable.validatables[3]).toBe(undefined);
//             });
//
//             it(`or validation`, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     Or, (v)=>MessageMap(v)
//                 );
//
//                 let validatable = validator(value);
//
//                 expect(validatable.valid).toBe(true);
//                 expect(validatable.value).toBe(value);
//
//                 expect(validatable.validatables[0].valid).toBe(true);
//                 expect(typeof validatable.validatables[0].message).toBe('string');
//
//                 expect(validatable.validatables[1].valid).toBe(true);
//                 expect(typeof validatable.validatables[1].message).toBe('string');
//
//                 expect(validatable.validatables[2].valid).toBe(true);
//                 expect(typeof validatable.validatables[2].message).toBe('string');
//
//                 // @ts-expecerror
//                 expect(validatable.validatables[3]).toBe(undefined);
//             });
//
//         });
//
//         describe("partial", function() {
//
//             it(`and validation`, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) =>  <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValuePartial(value, validators),
//                     And, (v)=>MessageMap(v)
//                 );
//
//                 let validatable = validator(value);
//
//                 expect(validatable.valid).toBe(true);
//                 expect(validatable.value).toBe(value);
//
//                 expect(validatable.validatables[0].valid).toBe(true);
//                 expect(typeof validatable.validatables[0].message).toBe('string');
//
//                 expect(validatable.validatables[1].valid).toBe(true);
//                 expect(typeof validatable.validatables[1].message).toBe('string');
//
//                 expect(validatable.validatables[2].valid).toBe(true);
//                 expect(typeof validatable.validatables[2].message).toBe('string');
//
//                 // @ts-expecerror
//                 expect(validatable.validatables[3]).toBe(undefined);
//             });
//
//             it(`or validation`, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) =>  <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValuePartial(value, validators),
//                     Or, (v)=>MessageMap(v)
//                 );
//
//                 let validatable = validator(value);
//
//                 expect(validatable.valid).toBe(true);
//                 expect(validatable.value).toBe(value);
//
//                 expect(validatable.validatables[0].valid).toBe(true);
//                 expect(typeof validatable.validatables[0].message).toBe('string');
//
//                 expect(validatable.validatables[1].valid).toBe(true);
//                 expect(typeof validatable.validatables[1].message).toBe('string');
//
//                 expect(validatable.validatables[2].valid).toBe(true);
//                 expect(typeof validatable.validatables[2].message).toBe('string');
//
//                 // @ts-expecerror
//                 expect(validatable.validatables[3]).toBe(undefined);
//             });
//         });
//
//     });
//
//     describe("mixed", function() {
//
//
//         type TypeValidator = [
//             SimpleValidator<any, string, Instance<any, string>>,
//             SimpleValidator<any, number, Instance<any, string>>,
//             SimpleValidator<any, string, Instance<any, string>>,
//         ];
//
//         let validators : TypeValidator= [
//             ValidatorType('string'),
//             ValidatorType('number'),
//             ValidatorType('string'),
//         ];
//
//         let value : string = 'name';
//
//         describe("complete", function() {
//
//             it(`and validation`, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     (v)=>And(v), (v)=>MessageMap(v)
//                 );
//
//                 let and = validator(value);
//
//                 expect<boolean>(and.valid).toBe(false);
//                 expect(and.value).toBe(value);
//
//                 expect(and.validatables[0].valid).toBe(true);
//                 expect(typeof and.validatables[0].message).toBe('string');
//
//                 expect(and.validatables[1].valid).toBe(false);
//                 expect(typeof and.validatables[1].message).toBe('string');
//
//                 expect(and.validatables[2].valid).toBe(true);
//                 expect(typeof and.validatables[2].message).toBe('string');
//
//                 // @ts-expecerror
//                 expect(and.validatables[3]).toBe(undefined);
//             });
//
//
//             it(`or validation `, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     (v)=>Or(v), (v)=>MessageMap(v)
//                 );
//
//                 let or = validator(value);
//
//                 expect(or.valid).toBe(true);
//                 expect(or.value).toBe(value);
//
//                 expect(typeof or.validatables[0].message).toBe('string');
//                 expect(or.validatables[0].valid).toBe(true);
//
//                 expect(typeof or.validatables[1].message).toBe('string');
//                 expect(or.validatables[1].valid).toBe(false);
//
//                 expect(typeof or.validatables[2].message).toBe('string');
//                 expect(or.validatables[2].valid).toBe(true);
//
//                 // @ts-expecerror
//                 expect(or.validatables[3]).toBe(undefined);
//
//             });
//         });
//
//
//         describe("partial", function() {
//
//             it(`and validation`, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) =>  <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValuePartial(value, validators),
//                     (v)=>And(v), (v)=>MessageMap(v)
//                 );
//
//                 let and = validator(value);
//
//                 expect<boolean>(and.valid).toBe(false);
//                 expect(and.value).toBe(value);
//
//                 expect(and.validatables[0].valid).toBe(true);
//                 expect(typeof and.validatables[0].message).toBe('string');
//
//                 expect(and.validatables[1].valid).toBe(false);
//                 expect(typeof and.validatables[1].message).toBe('string');
//
//                 expect(and.validatables[2]).toBe(<any>undefined);
//
//                 // @ts-expecerror
//                 expect(and.validatables[3]).toBe(<any>undefined);
//             });
//
//
//             it(`or validation `, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) =>  <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValuePartial(value, validators),
//                     (v)=>Or(v), (v)=>MessageMap(v)
//                 );
//
//                 let or = validator(value);
//
//                 expect(or.valid).toBe(true);
//                 expect(or.value).toBe(value);
//
//                 expect(typeof or.validatables[0].message).toBe('string');
//                 expect(or.validatables[0].valid).toBe(true);
//
//                 expect(typeof or.validatables[1].message).toBe('string');
//                 expect(or.validatables[1].valid).toBe(false);
//
//                 expect(or.validatables[2]).toBe(<any>undefined);
//
//                 // @ts-expecerror
//                 expect(or.validatables[3]).toBe(<any>undefined);
//
//             });
//         });
//     });
//
//     describe("all invalid", function() {
//
//         type TypeValidator = [
//             SimpleValidator<any, string, Instance<any, string>>,
//             SimpleValidator<any, number, Instance<any, string>>,
//             SimpleValidator<any, string, Instance<any, string>>,
//         ];
//
//         let validators : TypeValidator = [
//             ValidatorType('string'),
//             ValidatorType('number'),
//             ValidatorType('string'),
//         ];
//
//         let value : object = {};
//
//         describe("complete", function() {
//             it(`and validation`, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     (v)=>And(v), (v)=>MessageMap(v)
//                 );
//
//                 let and = validator(value);
//
//                 expect<boolean>(and.valid).toBe(false);
//                 expect(and.value).toEqual(value);
//
//                 expect(typeof and.validatables[0].message).toBe('string');
//                 expect(and.validatables[0].valid).toBe(false);
//
//                 expect(typeof and.validatables[1].message).toBe('string');
//                 expect(and.validatables[1].valid).toBe(false);
//
//                 expect(typeof and.validatables[2].message).toBe('string');
//                 expect(and.validatables[2].valid).toBe(false);
//
//                 // @ts-expecerror
//                 expect(and.validatables[3]).toBe(undefined);
//             });
//
//             it(`or validation `, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     (v)=>Or(v), (v)=>MessageMap(v)
//                 );
//
//                 let or = validator(value);
//
//                 expect<boolean>(or.valid).toBe(false);
//                 expect(or.value).toEqual(value);
//
//                 expect(typeof or.validatables[0].message).toBe('string');
//                 expect(or.validatables[0].valid).toBe(false);
//
//                 expect(typeof or.validatables[1].message).toBe('string');
//                 expect(or.validatables[1].valid).toBe(false);
//
//                 expect(typeof or.validatables[2].message).toBe('string');
//                 expect(or.validatables[2].valid).toBe(false);
//
//                 // @ts-expecerror
//                 expect(or.validatables[3]).toBe(undefined);
//             });
//         });
//
//
//         describe("partial", function() {
//
//             it(`and validation`, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValuePartial(value, validators),
//                     (v)=>And(v), (v)=>MessageMap(v)
//                 );
//                 let and = validator(value);
//
//                 expect<boolean>(and.valid).toBe(false);
//                 expect(and.value).toEqual(value);
//
//                 expect(and.validatables[0].valid).toBe(false);
//                 expect(typeof and.validatables[0].message).toBe('string');
//
//                 expect(and.validatables[1]).toBe(<any>undefined);
//                 expect(and.validatables[2]).toBe(<any>undefined);
//                 // @ts-expecerror
//                 expect(and.validatables[3]).toBe(<any>undefined);
//             });
//
//             it(`or validation `, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => <[ValidatableBundle, ValidatableBundle, ValidatableBundle]>ValidateValuePartial(value, validators),
//                     (v)=>Or(v), MessageMap
//                 );
//                 let or = validator(value);
//
//                 expect<boolean>(or.valid).toBe(false);
//                 expect(or.value).toEqual(value);
//
//                 expect(typeof or.validatables[0].message).toBe('string');
//                 expect(or.validatables[0].valid).toBe(false);
//
//                 expect(or.validatables[1]).toBe(<any>undefined);
//                 expect(or.validatables[2]).toBe(<any>undefined);
//
//                 // @ts-expecerror
//                 expect(or.validatables[3]).toBe(<any>undefined);
//             });
//         });
//     });
// });
//
//
//
//
// describe("recursive", function() {
//
//     describe("all valid", function() {
//
//         let validators  = [
//             ValidatorType('string'),
//             ValidatorType('string'),
//             ValidatorType('string'),
//             ValueCallback([
//                     ValidatorType('string'),
//                     ValidatorType('string'),
//                 ],
//                 (value, validators) => ValidateValue(value, validators),
//                 And, (v)=>MessageMap(v))
//         ];
//
//         let value : string = 'user';
//
//         describe("complete", function() {
//
//             describe(`and validation`, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     And, (v)=>MessageMap(v)
//                 );
//                 let validatable = validator(value);
//
//                 it('top level', ()=> {
//                     expect(validatable.valid).toBe(true);
//                     expect(validatable.value).toBe(value);
//
//                     expect(validatable.validatables[0].valid).toBe(true);
//                     expect(typeof validatable.validatables[0].message).toBe('string');
//
//                     expect(validatable.validatables[1].valid).toBe(true);
//                     expect(typeof validatable.validatables[1].message).toBe('string');
//
//                     expect(validatable.validatables[2].valid).toBe(true);
//                     expect(typeof validatable.validatables[2].message).toBe('string');
//                 });
//
//                 it('index 3.0', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {
//
//                         // @ts-expecerror
//                         expect(validatable.validatables[3].validatables[0].valid).toBe(true);
//                         // @ts-expecerror
//                         expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.1', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[1]) {
//
//                         // @ts-expecerror
//                         expect(validatable.validatables[3].validatables[1].valid).toBe(true);
//                         // @ts-expecerror
//                         expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.2', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {
//
//                         fail('should not exits')
//                     }
//                 });
//             });
//
//             describe(`or validation`, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     Or, (v)=>MessageMap(v)
//                 );
//
//                 let validatable = validator(value);
//
//                 it('top level', ()=> {
//                     expect(validatable.valid).toBe(true);
//                     expect(validatable.value).toBe(value);
//
//                     expect(validatable.validatables[0].valid).toBe(true);
//                     expect(typeof validatable.validatables[0].message).toBe('string');
//
//                     expect(validatable.validatables[1].valid).toBe(true);
//                     expect(typeof validatable.validatables[1].message).toBe('string');
//
//                     expect(validatable.validatables[2].valid).toBe(true);
//                     expect(typeof validatable.validatables[2].message).toBe('string');
//                 });
//
//                 it('index 3.0', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {
//
//                         // @ts-expecerror
//                         expect(validatable.validatables[3].validatables[0].valid).toBe(true);
//                         // @ts-expecerror
//                         expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.1', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[1]) {
//
//                         // @ts-expecerror
//                         expect(validatable.validatables[3].validatables[1].valid).toBe(true);
//                         // @ts-expecerror
//                         expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.2', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {
//
//                         fail('should not exits')
//                     }
//                 });
//             });
//
//         });
//
//         describe("partial", function() {
//
//             describe(`and validation`, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) =>  ValidateValuePartial(value, validators),
//                     And, (v)=>MessageMap(v)
//                 );
//
//                 let validatable = validator(value);
//
//                 it('top level', ()=> {
//                     expect(validatable.valid).toBe(true);
//                     expect(validatable.value).toBe(value);
//
//                     expect(validatable.validatables[0].valid).toBe(true);
//                     expect(typeof validatable.validatables[0].message).toBe('string');
//
//                     expect(validatable.validatables[1].valid).toBe(true);
//                     expect(typeof validatable.validatables[1].message).toBe('string');
//
//                     expect(validatable.validatables[2].valid).toBe(true);
//                     expect(typeof validatable.validatables[2].message).toBe('string');
//                 });
//
//                 it('index 3.0', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {
//
//                         // @ts-expecerror
//                         expect(validatable.validatables[3].validatables[0].valid).toBe(true);
//                         // @ts-expecerror
//                         expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');
//
//                     } else {
//
//                         fail('should exits')
//                     }
//                 });
//
//                 it('index 3.1', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[1]) {
//
//                         // @ts-expecerror
//                         expect(validatable.validatables[3].validatables[1].valid).toBe(true);
//                         // @ts-expecerror
//                         expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');
//
//                     } else {
//
//                         fail('should exits')
//                     }
//                 });
//
//                 it('index 3.2', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {
//
//                         fail('should not exits')
//                     }
//                 });
//             });
//
//             describe(`or validation`, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValuePartial(value, validators),
//                     Or, (v)=>MessageMap(v)
//                 );
//
//                 let validatable = validator(value);
//
//                 it('top level', ()=> {
//                     expect(validatable.valid).toBe(true);
//                     expect(validatable.value).toBe(value);
//
//                     expect(validatable.validatables[0].valid).toBe(true);
//                     expect(typeof validatable.validatables[0].message).toBe('string');
//
//                     expect(validatable.validatables[1].valid).toBe(true);
//                     expect(typeof validatable.validatables[1].message).toBe('string');
//
//                     expect(validatable.validatables[2].valid).toBe(true);
//                     expect(typeof validatable.validatables[2].message).toBe('string');
//                 });
//
//                 it('index 3.0', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {
//
//                         // @ts-expecerror
//                         expect(validatable.validatables[3].validatables[0].valid).toBe(true);
//                         // @ts-expecerror
//                         expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.1', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[1]) {
//
//                         // @ts-expecerror
//                         expect(validatable.validatables[3].validatables[1].valid).toBe(true);
//                         // @ts-expecerror
//                         expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.2', ()=>{
//
//                     // @ts-expecerror
//                     if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {
//
//                         fail('should not exits')
//                     }
//                 });
//             });
//         });
//
//     });
//
//     describe("mixed", function() {
//
//         let validators  = [
//             ValidatorType('string'),
//             ValidatorType('number'),
//             ValidatorType('string'),
//             ValueCallback([
//                     ValidatorType('number'),
//                     ValidatorType('string'),
//             ], (value, validators) => ValidateValue(value, validators), And, (v)=>MessageMap(v))
//         ];
//
//         let value : string = 'name';
//
//         describe("complete", function() {
//
//             describe(`and validation`, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     (v)=>And(v), (v)=>MessageMap(v)
//                 );
//
//                 let and = validator(value);
//
//                 it(`top level`, () => {
//                     expect<boolean>(and.valid).toBe(false);
//                     expect(and.value).toBe(value);
//
//                     expect(and.validatables[0].valid).toBe(true);
//                     expect(typeof and.validatables[0].message).toBe('string');
//
//                     expect(and.validatables[1].valid).toBe(false);
//                     expect(typeof and.validatables[1].message).toBe('string');
//
//                     expect(and.validatables[2].valid).toBe(true);
//                     expect(typeof and.validatables[2].message).toBe('string');
//                 });
//
//                 it('index 3.0', ()=>{
//
//                     // @ts-expecerror
//                     if(and.validatables[3] && and.validatables[3].validatables[0]) {
//
//                         // @ts-expecerror
//                         expect(and.validatables[3].validatables[0].valid).toBe(false);
//                         // @ts-expecerror
//                         expect(typeof and.validatables[3].validatables[0].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.1', ()=>{
//
//                     // @ts-expecerror
//                     if(and.validatables[3] && and.validatables[3].validatables[1]) {
//
//                         // @ts-expecerror
//                         expect(and.validatables[3].validatables[1].valid).toBe(true);
//                         // @ts-expecerror
//                         expect(typeof and.validatables[3].validatables[1].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.2', ()=>{
//
//                     // @ts-expecerror
//                     if(and.validatables[3] && and.validatables[3].validatables[2]) {
//
//                         fail('should not exits')
//                     }
//                 });
//             });
//
//
//             describe(`or validation `, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     (v)=>Or(v), (v)=>MessageMap(v)
//                 );
//
//                 let or = validator(value);
//
//                 it('top level', ()=> {
//                     expect(or.valid).toBe(true);
//                     expect(or.value).toBe(value);
//
//                     expect(typeof or.validatables[0].message).toBe('string');
//                     expect(or.validatables[0].valid).toBe(true);
//
//                     expect(typeof or.validatables[1].message).toBe('string');
//                     expect(or.validatables[1].valid).toBe(false);
//
//                     expect(typeof or.validatables[2].message).toBe('string');
//                     expect(or.validatables[2].valid).toBe(true);
//                 });
//
//                 it('index 3.0', ()=>{
//
//                     // @ts-expecerror
//                     if(or.validatables[3] && or.validatables[3].validatables[0]) {
//
//                         // @ts-expecerror
//                         expect(or.validatables[3].validatables[0].valid).toBe(false);
//                         // @ts-expecerror
//                         expect(typeof or.validatables[3].validatables[0].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.1', ()=>{
//
//                     // @ts-expecerror
//                     if(or.validatables[3] && or.validatables[3].validatables[1]) {
//
//                         // @ts-expecerror
//                         expect(or.validatables[3].validatables[1].valid).toBe(true);
//                         // @ts-expecerror
//                         expect(typeof or.validatables[3].validatables[1].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.2', ()=>{
//
//                     // @ts-expecerror
//                     if(or.validatables[3] && or.validatables[3].validatables[2]) {
//
//                         fail('should not exits')
//                     }
//                 });
//
//             });
//         });
//
//
//         describe("partial", function() {
//
//             describe(`and validation`, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) =>  ValidateValuePartial(value, validators),
//                     (v)=>And(v), (v)=>MessageMap(v)
//                 );
//
//                 let and = validator(value);
//
//                 it('top level', ()=> {
//                     expect<boolean>(and.valid).toBe(false);
//                     expect(and.value).toBe(value);
//
//                     expect(and.validatables[0].valid).toBe(true);
//                     expect(typeof and.validatables[0].message).toBe('string');
//
//                     expect(and.validatables[1].valid).toBe(false);
//                     expect(typeof and.validatables[1].message).toBe('string');
//
//                     expect(and.validatables[2]).toBe(<any>undefined);
//                     expect(and.validatables[3]).toBe(<any>undefined);
//                 });
//             });
//
//
//             describe(`or validation `, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValuePartial(value, validators),
//                     (v)=>Or(v), (v)=>MessageMap(v)
//                 );
//
//                 let or = validator(value);
//
//                 it('top level', ()=> {
//                     expect(or.valid).toBe(true);
//                     expect(or.value).toBe(value);
//
//                     expect(typeof or.validatables[0].message).toBe('string');
//                     expect(or.validatables[0].valid).toBe(true);
//
//                     expect(typeof or.validatables[1].message).toBe('string');
//                     expect(or.validatables[1].valid).toBe(false);
//
//                     expect(or.validatables[2]).toBe(<any>undefined);
//                     expect(or.validatables[3]).toBe(<any>undefined);
//                 });
//             });
//         });
//     });
//
//     describe("all invalid", function() {
//
//         let validators = [
//             ValidatorType('string'),
//             ValidatorType('number'),
//             ValidatorType('string'),
//             ValueCallback([
//                 ValidatorType('number'),
//                 ValidatorType('string'),
//             ], (value, validators) => ValidateValue(value, validators), And, (v)=>MessageMap(v))
//         ];
//
//         let value : object = {};
//
//         describe("complete", function() {
//
//             describe(`and validation`, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     (v)=>And(v), (v)=>MessageMap(v)
//                 );
//
//                 let and = validator(value);
//
//                 it('top level', ()=> {
//
//                     expect<boolean>(and.valid).toBe(false);
//                     expect(and.value).toEqual(value);
//
//                     expect(typeof and.validatables[0].message).toBe('string');
//                     expect(and.validatables[0].valid).toBe(false);
//
//                     expect(typeof and.validatables[1].message).toBe('string');
//                     expect(and.validatables[1].valid).toBe(false);
//
//                     expect(typeof and.validatables[2].message).toBe('string');
//                     expect(and.validatables[2].valid).toBe(false);
//                 });
//
//                 it('index 3.0', ()=>{
//
//                     // @ts-expecerror
//                     if(and.validatables[3] && and.validatables[3].validatables[0]) {
//
//                         // @ts-expecerror
//                         expect(and.validatables[3].validatables[0].valid).toBe(false);
//                         // @ts-expecerror
//                         expect(typeof and.validatables[3].validatables[0].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.1', ()=>{
//
//                     // @ts-expecerror
//                     if(and.validatables[3] && and.validatables[3].validatables[1]) {
//
//                         // @ts-expecerror
//                         expect(and.validatables[3].validatables[1].valid).toBe(false);
//                         // @ts-expecerror
//                         expect(typeof and.validatables[3].validatables[1].message).toBe('string');
//
//                     } else {
//
//                         fail('index 2 should exits')
//                     }
//                 });
//
//                 it('index 3.2', ()=>{
//
//                     // @ts-expecerror
//                     if(and.validatables[3] && and.validatables[3].validatables[2]) {
//
//                         fail('should not exits')
//                     }
//                 });
//             });
//
//             describe(`or validation `, () => {
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValue(value, validators),
//                     (v)=>Or(v), (v)=>MessageMap(v)
//                 );
//
//                 let or = validator(value);
//
//                 it('top level', ()=> {
//                     expect<boolean>(or.valid).toBe(false);
//                     expect(or.value).toEqual(value);
//
//                     expect(typeof or.validatables[0].message).toBe('string');
//                     expect(or.validatables[0].valid).toBe(false);
//
//                     expect(typeof or.validatables[1].message).toBe('string');
//                     expect(or.validatables[1].valid).toBe(false);
//
//                     expect(typeof or.validatables[2].message).toBe('string');
//                     expect(or.validatables[2].valid).toBe(false);
//                 });
//
//                 it('index 3.0', ()=>{
//
//                     // @ts-expecerror
//                     if(or.validatables[3] && or.validatables[3].validatables[0]) {
//
//                         // @ts-expecerror
//                         expect(or.validatables[3].validatables[0].valid).toBe(false);
//                         // @ts-expecerror
//                         expect(typeof or.validatables[3].validatables[0].message).toBe('string');
//
//                     } else {
//
//                         fail('should exits')
//                     }
//                 });
//
//                 it('index 3.1', ()=>{
//
//                     // @ts-expecerror
//                     if(or.validatables[3] && or.validatables[3].validatables[1]) {
//
//                         // @ts-expecerror
//                         expect(or.validatables[3].validatables[1].valid).toBe(false);
//                         // @ts-expecerror
//                         expect(typeof or.validatables[3].validatables[1].message).toBe('string');
//
//                     } else {
//
//                         fail('should exits')
//                     }
//                 });
//
//                 it('index 3.2', ()=>{
//
//                     // @ts-expecerror
//                     if(or.validatables[3] && or.validatables[3].validatables[2]) {
//
//                         fail('should not exits')
//                     }
//                 });
//             });
//         });
//
//
//         describe("partial", function() {
//
//             describe(`and validation`, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValuePartial(value, validators),
//                     (v)=>And(v), (v)=>MessageMap(v)
//                 );
//                 let and = validator(value);
//
//                 it(`top level`, () => {
//                     expect<boolean>(and.valid).toBe(false);
//                     expect(and.value).toEqual(value);
//
//                     expect(and.validatables[0].valid).toBe(false);
//                     expect(typeof and.validatables[0].message).toBe('string');
//
//                     expect(and.validatables[1]).toBe(<any>undefined);
//                     expect(and.validatables[2]).toBe(<any>undefined);
//                     expect(and.validatables[3]).toBe(<any>undefined);
//                 });
//             });
//
//             describe(`or validation `, () => {
//
//                 type ValidatableBundle = ValueInterface & Validatable & Message<string>;
//
//                 let validator = ValueCallback(validators,
//                     (value, validators) => ValidateValuePartial(value, validators),
//                     (v)=>Or(v), MessageMap
//                 );
//                 let or = validator(value);
//
//                 it('top level', ()=> {
//                     expect<boolean>(or.valid).toBe(false);
//                     expect(or.value).toEqual(value);
//
//                     expect(typeof or.validatables[0].message).toBe('string');
//                     expect(or.validatables[0].valid).toBe(false);
//
//                     expect(or.validatables[1]).toBe(<any>undefined);
//                     expect(or.validatables[2]).toBe(<any>undefined);
//                     expect(or.validatables[3]).toBe(<any>undefined);
//                 });
//             });
//         });
//     });
// });
