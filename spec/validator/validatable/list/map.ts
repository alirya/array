import Map from "../../../../dist/validator/validatable/list/map-parameters";
import ValidatorType from "@dikac/t-type/validator/type-parameters";


it("force console log", () => spyOn(console, 'log').and.callThrough());

describe("simple validatable", function() {

    let validator = [
        ValidatorType("number"), //new Num(),
        ValidatorType("number"), //new NumAny(),
        ValidatorType("string"), //new Str(),
        ValidatorType("string"), //new StrAny(),
        ValidatorType("number"), //new Num(),
        ValidatorType("number"), //new NumAny(),
        ValidatorType("string"), //new Str(),
        ValidatorType("string"), //new StrAny(),
    ];

    let value = [
        10,
        10,
        'str',
        'str',
        10,
        'str',
        'str',
        10,
    ];

    let result = Map(value, validator);
    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator4', ()=> expect(result[2].valid).toBe(true));
    it('match validator5', ()=> expect(result[3].valid).toBe(true));
    it('match validator7', ()=> expect(result[4].valid).toBe(true));
    it('match validator8', ()=> expect(result[5].valid).toBe(false));
    it('match validator10', ()=> expect(result[6].valid).toBe(true));
    it('match validator11', ()=> expect(result[7].valid).toBe(false));

});


describe("simple validatable", function() {

    let validator = [
        ValidatorType("number"), //new Num(),
        ValidatorType("number"), //new NumAny(),
        ValidatorType("string"), //new Str(),
        ValidatorType("string"), //new StrAny(),
        ValidatorType("number"), //new Num(),
        ValidatorType("number"), //new NumAny(),
        ValidatorType("string"), //new Str(),
        ValidatorType("string"), //new StrAny()
    ];

    let value = [
        10,
        10,
        'str',
        'str',
        10,
        'str',
        'str',
        10,
    ];

    let result = Map(value, validator);
    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator4', ()=> expect(result[2].valid).toBe(true));
    it('match validator5', ()=> expect(result[3].valid).toBe(true));
    it('match validator7', ()=> expect(result[4].valid).toBe(true));
    it('match validator8', ()=> expect(result[5].valid).toBe(false));
    it('match validator10', ()=> expect(result[6].valid).toBe(true));
    it('match validator11', ()=> expect(result[7].valid).toBe(false));

});


describe("extended validatable", function() {

    let validator = [
        ValidatorType("number"), //new ExtendedNum(),
        ValidatorType("number"), //new ExtendedNumAny(),
        ValidatorType("string"), //new ExtendedStr(),
        ValidatorType("string"), //new ExtendedStrAny(),
        ValidatorType("number"), //new ExtendedNum(),
        ValidatorType("number"), //new ExtendedNumAny(),
        ValidatorType("string"), //new ExtendedStr(),
        ValidatorType("string"), //new ExtendedStrAny(),
    ];

    let value = [
        10,
        10,
        'str',
        'str',
        10,
        'str',
        'str',
        10,

    ];

    let result = Map(value, validator);

    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator1', ()=> expect(result[0].message).toBe('value is type of "number"'));
    it('match validator1', ()=> expect(result[0].value).toBe(10));

    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].message).toBe('value is type of "number"'));
    it('match validator2', ()=> expect(result[1].value).toBe(10));

    it('match validator4', ()=> expect(result[2].valid).toBe(true));
    it('match validator4', ()=> expect(result[2].message).toBe('value is type of "string"'));
    it('match validator4', ()=> expect(result[2].value).toBe('str'));

    it('match validator5', ()=> expect(result[3].valid).toBe(true));
    it('match validator5', ()=> expect(result[3].message).toBe('value is type of "string"'));
    it('match validator5', ()=> expect(result[3].value).toBe('str'));

    it('match validator7', ()=> expect(result[4].valid).toBe(true));
    it('match validator7', ()=> expect(result[4].message).toBe('value is type of "number"'));
    it('match validator7', ()=> expect(result[4].value).toBe(10));

    it('match validator8', ()=> expect(result[5].valid).toBe(false));
    it('match validator8', ()=> expect(result[5].message).toBe('value is not type of "number"'));
    it('match validator8', ()=> expect(result[5].value).toBe('str'));

    it('match validator10', ()=> expect(result[6].valid).toBe(true));
    it('match validator10', ()=> expect(result[6].message).toBe('value is type of "string"'));
    it('match validator10', ()=> expect(result[6].value).toBe('str'));

    it('match validator11', ()=> expect(result[7].valid).toBe(false));
    it('match validator11', ()=> expect(result[7].message).toBe('value is not type of "string"'));
    it('match validator11', ()=> expect(result[7].value).toBe(10));


});
