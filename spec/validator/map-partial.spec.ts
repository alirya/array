import Map from "../../dist/validator/map-partial";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatables from "../../dist/validatable/validatables/validatables";
import MessageMap from "../../dist/message/message/list/map";
import ValidatorType from "@dikac/t-type/validator/type-standard";
import Instance from "@dikac/t-validator/validatable/validatable";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {


    describe("implicit partial", function() {

        let validator = [
            ValidatorType("string"), // new Validator('string'),
            ValidatorType("string"), // new Validator('string'),
        ];

        let value = [
            'name',
            'address',
        ];

        let property = Map(validator, (v)=>And(v), MessageMap);

        let validatable = property.validate(value);

        let key : Validatable;

        key = validatable.validatables[0];
        key = validatable.validatables[1];
        key = validatable.validatables[2];

        let validatables : Validatables = validatable;

        let record : Validatable[] = validatable.validatables;

        let validatable1 : Validatables<Validatable[]> = validatable;

        let unknown : unknown = validatable.value;

        // @ts-expect-error
        let string : Type = validatable.value;

        describe("recursive", function() {

            let validator = ValidatorType('string');
            let list1 = Map([validator], And, MessageMap);
            let list2 = Map([list1], And, MessageMap);
            let list3 = Map([list2], And, MessageMap);

        });
    });

    describe("explicit complete", function() {


        type TypeValidator = [
            SimpleValidator<any, string, Instance<any, string>>,
            SimpleValidator<any, string, Instance<any, string>>,
        ];

        let validator : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        type Type = [
            string,
            string,
        ];

        let value : Type = [
            'name',
            'address',
        ];

        describe("auto", function() {

            let property = Map(validator, And, MessageMap);

            let validatable = property.validate(value);

            let key : Validatable;

            key = validatable.validatables[0];
            key = validatable.validatables[1];
            key = validatable.validatables[2];

            let validatables : Validatables = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables<Validatable[]> = validatable;

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;

        });

        describe("direct", function() {

            let property = Map<TypeValidator>(validator, (v)=>And(v), MessageMap);

            let validatable = property.validate(<any>value);


            let key : Validatable;
            key = validatable.validatables[0];
            key = validatable.validatables[1];
            key = validatable.validatables[2];

            let validatables : Validatables = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables<Validatable[]> = validatable;

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;
        });
    });
});




describe("all valid", function() {

    let validator = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
    ];

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = Map(validator,(v)=>And(v), MessageMap);
        let validatable = property.validate(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 0 should exits')
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(true);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[2]) {
            expect(validatable.validatables[2].valid).toBe(true);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 2 should exits')
        }
    });

    it(`check handler and`, () => {

        let property = Map(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = Map(validator,(v)=>Or(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

});

describe("mixed", function() {

    let validator = [
        ValidatorType('string'),
        ValidatorType('number'),
        ValidatorType('string'),
    ];

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = Map(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 0 should exits')
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(false);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[2]) {
            fail('index 2 should not exits')
        }
    });

    it(`check handler and`, () => {

        let property = Map(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = Map(validator,(v)=>Or(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

});

describe("all invalid", function() {

    let validator = [
        ValidatorType('number'),
        ValidatorType('number'),
        ValidatorType('number'),
    ];

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = Map(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(false);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[2]) {
            fail('index 2 should not exits')
        }

        if(validatable.validatables[2]) {
            fail('index 3 should not exits')
        }
    });

    it(`check handler and`, () => {

        let property = Map(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = Map(validator,(v)=>Or(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

});


describe("recursive", function() {

    describe("all invalid", function() {

        let validator = [
            ValidatorType('number'),
            ValidatorType('number'),
            ValidatorType('number'),
            Map([
                ValidatorType('number'),
                ValidatorType('number')
            ],(v)=>And(<Validatable[]>v), MessageMap)
        ];

        let value = [
            'user',
            'name',
            'address',
            [
                'data',
                "data"
            ]
        ];

        it(`check validate return`, () => {

            let property = Map(validator,(v)=>And(<Validatable[]>v), MessageMap);
            let validatable = property.validate(value);

            if(validatable.validatables[0]) {
                expect(validatable.validatables[0].valid).toBe(false);
                expect(typeof validatable.validatables[0].message).toBe('string');
            } else {
                fail('index 1 should exits')
            }

            if(validatable.validatables[2]) {
                fail('index 2 should not exits')
            }

            if(validatable.validatables[2]) {
                fail('index 3 should not exits')
            }
        });

        it(`check handler and`, () => {

            let property = Map(validator,(v)=>And(<Validatable[]>v), MessageMap);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(false);
            expect(validatable.value).toEqual(value);
        });

        it(`check handler or`, () => {

            let property = Map(validator,(v)=>Or(<Validatable[]>v), MessageMap);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(false);
            expect(validatable.value).toEqual(value);
        });

    });
});
