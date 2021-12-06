// import Value from "../../../../dist/validator/validatable/list/value-parameters";
// import Validatable from "@dikac/t-validatable/validatable";
// import Validator from "@dikac/t-validator/validator";
// import ValidatorType from "@dikac/t-type/validator/type-parameters";
//
// it("force console log", () => spyOn(console, 'log').and.callThrough());
//
// describe("compiler compatibility", function() {
//
//     describe("explicit", function() {
//
//         let validator : [
//             Validator<any>,
//             Validator<any>,
//             Validator<any>,
//             Validator<any>
//         ] = [
//             ValidatorType("number"), // new Num(),
//             ValidatorType("number"), // new NumAny(),
//             ValidatorType("string"), // new Str(),
//             ValidatorType("string"), // new StrAny(),
//         ];
//
//         let value = 10;
//
//         let result = Value<any, [
//             Validator<any>,
//             Validator<any>,
//             Validator<any>,
//             Validator<any>
//         ]>(value, validator);
//
//         let valdiatable : Validatable|undefined;
//
//         valdiatable = result[0];
//         valdiatable = result[1];
//         valdiatable = result[2];
//         valdiatable = result[3];
//
//         // @ts-expect-error
//         valdiatable = result[4];
//
//     });
//
//
//     describe("implicit", function() {
//
//         let validator = [
//             ValidatorType("number"), //new Num(),
//             ValidatorType("number"), //new NumAny(),
//             ValidatorType("string"), //new Str(),
//             ValidatorType("string"), //new StrAny(),
//         ];
//
//         let value : any = 10;
//
//         let result = Value(value, validator);
//
//         let valdiatable : Validatable|undefined;
//
//         valdiatable = result[0];
//         valdiatable = result[1];
//         valdiatable = result[2];
//         valdiatable = result[3];
//         valdiatable = result[4];
//
//
//     });
// });
//
//
//
//
// describe("simple validatable", function() {
//
//     let validator = [
//         ValidatorType("number"), //new Num(),
//         ValidatorType("number"), //new NumAny(),
//         ValidatorType("string"), //new Str(),
//         ValidatorType("string"), //new StrAny(),
//         ValidatorType("number"), //new Num(),
//         ValidatorType("number"), //new NumAny(),
//         ValidatorType("string"), //new Str(),
//         ValidatorType("string"), //new StrAny(),
//     ];
//
//     let value = 10;
//
//     let result = Value<any, typeof validator>(value, validator);
//     it('match validator1', ()=> expect(result[0].valid).toBe(true));
//     it('match validator2', ()=> expect(result[1].valid).toBe(true));
//     it('match validator4', ()=> expect(result[2].valid).toBe(false));
//     it('match validator5', ()=> expect(result[3].valid).toBe(false));
//     it('match validator7', ()=> expect(result[4].valid).toBe(true));
//     it('match validator8', ()=> expect(result[5].valid).toBe(true));
//     it('match validator10', ()=> expect(result[6].valid).toBe(false));
//     it('match validator11', ()=> expect(result[7].valid).toBe(false));
//
// });
//
//
// describe("simple validatable", function() {
//
//     let validator = [
//         ValidatorType("number"), //new Num(),
//         ValidatorType("number"), //new NumAny(),
//         ValidatorType("string"), //new Str(),
//         ValidatorType("string"), //new StrAny(),
//         ValidatorType("number"), //new Num(),
//         ValidatorType("number"), //new NumAny(),
//         ValidatorType("string"), //new Str(),
//         ValidatorType("string"), //new StrAny(),
//     ];
//
//     let value = 'str';
//
//     let result = Value<any, typeof validator>(value, validator);
//     it('match validator1', ()=> expect(result[0].valid).toBe(false));
//     it('match validator2', ()=> expect(result[1].valid).toBe(false));
//     it('match validator4', ()=> expect(result[2].valid).toBe(true));
//     it('match validator5', ()=> expect(result[3].valid).toBe(true));
//     it('match validator7', ()=> expect(result[4].valid).toBe(false));
//     it('match validator8', ()=> expect(result[5].valid).toBe(false));
//     it('match validator10', ()=> expect(result[6].valid).toBe(true));
//     it('match validator11', ()=> expect(result[7].valid).toBe(true));
//
// });
//
//
// describe("extended validatable", function() {
//
//     let validator = [
//         ValidatorType("number"), //new ExtendedNum(),
//         ValidatorType("number"), //new ExtendedNumAny(),
//         ValidatorType("string"), //new ExtendedStr(),
//         ValidatorType("string"), //new ExtendedStrAny(),
//         ValidatorType("number"), //new ExtendedNum(),
//         ValidatorType("number"), //new ExtendedNumAny(),
//         ValidatorType("string"), //new ExtendedStr(),
//         ValidatorType("string"), //new ExtendedStrAny(),
//     ];
//
//     let value = 10;
//
//     let result = Value<any, typeof validator>(value, validator);
//
//     it('match validator1', ()=> expect(result[0].valid).toBe(true));
//     it('match validator1', ()=> expect(typeof result[0].message).toBe('string'));
//     it('match validator1', ()=> expect(result[0].value).toBe(10));
//
//     it('match validator2', ()=> expect(result[1].valid).toBe(true));
//     it('match validator2', ()=> expect(typeof result[1].message).toBe('string'));
//     it('match validator2', ()=> expect(result[1].value).toBe(10));
//
//     it('match validator4', ()=> expect(result[2].valid).toBe(false));
//     it('match validator4', ()=> expect(typeof result[2].message).toBe('string'));
//     it('match validator5', ()=> expect(result[2].value).toBe(10));
//
//     it('match validator5', ()=> expect(result[3].valid).toBe(false));
//     it('match validator5', ()=> expect(typeof result[3].message).toBe('string'));
//     it('match validator5', ()=> expect(result[3].value).toBe(10));
//
//     it('match validator7', ()=> expect(result[4].valid).toBe(true));
//     it('match validator7', ()=> expect(typeof result[4].message).toBe('string'));
//     it('match validator7', ()=> expect(result[4].value).toBe(10));
//
//     it('match validator8', ()=> expect(result[5].valid).toBe(true));
//     it('match validator8', ()=> expect(typeof result[5].message).toBe('string'));
//     it('match validator8', ()=> expect(result[5].value).toBe(10));
//
//     it('match validator10', ()=> expect(result[6].valid).toBe(false));
//     it('match validator10', ()=> expect(typeof result[6].message).toBe('string'));
//     it('match validator11', ()=> expect(result[6].value).toBe(10));
//
//     it('match validator11', ()=> expect(result[7].valid).toBe(false));
//     it('match validator11', ()=> expect(typeof result[7].message).toBe('string'));
//     it('match validator11', ()=> expect(result[7].value).toBe(10));
//
//
// });
