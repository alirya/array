import MapAll from "../../dist/validator/map-all";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatables from "../../dist/validatable/validatables/validatables";
import ValidatablesInterface from "../../dist/validatable/validatables/validatables";
import MessageMap from "../../dist/message/message/list/map";
import ValidatorType from "@dikac/t-type/validator/type-standard";
import Instance from "@dikac/t-validator/validatable/validatable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("implicit partial", function() {

        let validator = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        let value = [
            'name',
            'address',
        ];

        let property = MapAll(validator, (v)=>And(<Validatable[]>v), MessageMap);

        let validatable = property(value);

        let key : Validatable;

        key = validatable.validatables[0];

        key = validatable.validatables[1];

        key = validatable.validatables[2];

        let validatables : ValidatablesInterface = validatable;

        let record : Validatable[] = validatable.validatables;

        let validatable1 : Validatables = validatable;

        let unknown : unknown = validatable.value;

        // @ts-expect-error
        let string : Type = validatable.value;

        describe("recursive", function() {

            let validator = ValidatorType('string');
            let list1 = MapAll([validator], And, MessageMap);
            let list2 = MapAll([list1], And, MessageMap);
            let list3 = MapAll([list2], And, MessageMap);

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

            let property = MapAll(validator, (v)=>And(<Validatable[]>v), MessageMap);

            let validatable = property(value);

            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];

            // @ts-expect-error
            key = validatable.validatables[2];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;

        });

        describe("direct", function() {

            let property = MapAll<TypeValidator>(validator, (v)=>And(<Validatable[]>v), MessageMap);

            let validatable = property(value);


            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];
            // @ts-expect-error
            key = validatable.validatables[2];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables = validatable;

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

        let property = MapAll(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property(value);

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

        let property = MapAll(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = MapAll(validator,(v)=>Or(<Validatable[]>v), MessageMap);
        let validatable = property(value);

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

        let property = MapAll(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property(value);

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
            expect(validatable.validatables[2].valid).toBe(true);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 2 should exits')
        }

    });

    it(`check handler and`, () => {

        let property = MapAll(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = MapAll(validator,(v)=>Or(<Validatable[]>v), MessageMap);
        let validatable = property(value);

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

        let property = MapAll(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(false);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(false);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 2 should not exits')
        }

        if(validatable.validatables[2]) {
            expect(validatable.validatables[2].valid).toBe(false);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 3 should not exits')
        }
    });

    it(`check handler and`, () => {

        let property = MapAll(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toEqual(value);
    });

    it(`check handler or`, () => {

        let property = MapAll(validator,(v)=>Or(<Validatable[]>v), MessageMap);
        let validatable = property(value);

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
            MapAll([
                ValidatorType('number'),
                ValidatorType('number'),
            ], (v)=>And(v), MessageMap)
        ];

        let value = [
            'user',
            'name',
            'address',
            [
                '1',
                '2'
            ]
        ];

        it(`check validate return`, () => {

            let property = MapAll(validator,(v)=>And(v), MessageMap);
            let validatable = property(value);

            if(validatable.validatables[0]) {
                expect(validatable.validatables[0].valid).toBe(false);
                expect(typeof validatable.validatables[0].message).toBe('string');
            } else {
                fail('index 1 should exits')
            }

            if(validatable.validatables[1]) {
                expect(validatable.validatables[1].valid).toBe(false);
                expect(typeof validatable.validatables[1].message).toBe('string');
            } else {
                fail('index 2 should not exits')
            }

            if(validatable.validatables[2]) {
                expect(validatable.validatables[2].valid).toBe(false);
                expect(typeof validatable.validatables[2].message).toBe('string');
            } else {
                fail('index 3 should not exits')
            }

            if(validatable.validatables[3]) {

                // @ts-expect-error
                if(validatable.validatables[3].validatables[0]) {
                     // @ts-expect-error
                    expect(validatable.validatables[3].validatables[0].valid).toBe(false);
                     // @ts-expect-error
                    expect(typeof validatable.validatables[3].validatables[0].message).toBe('string');
                } else {
                    fail('index 3.0 should exits')
                }

                // @ts-expect-error
                if(validatable.validatables[3].validatables[1]) {
                     // @ts-expect-error
                    expect(validatable.validatables[3].validatables[1].valid).toBe(false);
                     // @ts-expect-error
                    expect(typeof validatable.validatables[3].validatables[1].message).toBe('string');
                } else {
                    fail('index 3.1 should exits')
                }

                // @ts-expect-error
                if(validatable.validatables[3].validatables[2]) {
                    fail('index 3.2 should no exits')
                }


            } else {
                fail('index 3 should not exits')
            }
        });

    });
});
