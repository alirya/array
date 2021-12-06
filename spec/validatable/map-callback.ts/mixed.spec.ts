import Map from "../../../dist/validatable/map-callback-parameters";
import Standard from "../../../dist/validator/validatable/list/map-parameters";
import PartialStandard from "../../../dist/validator/validatable/list/map-partial-parameters";
import And from "../../../dist/validatable/and-parameters";
import Or from "../../../dist/validatable/or-parameters";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/simple";
import ValueInterface from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import MessageMap from "../../../dist/message/message/list/map";
import ValidatorType from "@dikac/t-type/validator/type-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

type TypeValidator = [
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, number, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
];

type Type = [
    string,
    string,
    string,
]

let validator : TypeValidator= [
    ValidatorType('string'),
    ValidatorType('number'),
    ValidatorType('string'),
];

let value : Type = [
    "11",
    'name',
    'address',
];

describe("complete", function() {

    it(`and validation`, () => {

        let and = new Map(value, validator,
            (value, validators) => Standard(value, validators),
            (v)=>And(v), (v)=>MessageMap(v)
        );

        expect(and.valid).toBe(false);
        expect(and.value).toEqual(value);

        expect(and.validatables[0].valid).toBe(true);
        expect(typeof and.validatables[0].message).toBe('string');

        expect(and.validatables[1].valid).toBe(false);
        expect(typeof and.validatables[1].message).toBe('string');

        expect(and.validatables[2].valid).toBe(true);
        expect(typeof and.validatables[2].message).toBe('string');

        // @ts-expect-error
        expect(and.validatables[3]).toBe(undefined);
    });


    it(`or validation `, () => {

        let or = new Map(value, validator,
            (value, validators) => Standard(value, validators),
            (v)=>Or(v), (v)=>MessageMap(v)
        );

        expect(or.valid).toBe(true);
        expect(or.value).toEqual(value);

        expect(typeof or.validatables[0].message).toBe('string');
        expect(or.validatables[0].valid).toBe(true);

        expect(typeof or.validatables[1].message).toBe('string');
        expect(or.validatables[1].valid).toBe(false);

        expect(typeof or.validatables[2].message).toBe('string');
        expect(or.validatables[2].valid).toBe(true);

        // @ts-expect-error
        expect(or.validatables[3]).toBe(undefined);

    });
});


describe("partial", function() {

    it(`and validation`, () => {

        let and = new Map(value, validator,
            (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>PartialStandard(value, validators),
            (v)=>And(v), (v)=>MessageMap(v)
        );

        expect(and.valid).toBe(false);
        expect(and.value).toEqual(value);

        expect(and.validatables[0].valid).toBe(true);
        expect(typeof and.validatables[0].message).toBe('string');

        expect(and.validatables[1].valid).toBe(false);
        expect(typeof and.validatables[1].message).toBe('string');

        expect(and.validatables[2]).toBe(<any>undefined);
        expect(and.validatables[3]).toBe(<any>undefined);
    });


    it(`or validation `, () => {

        let or = new Map(value, validator,
            (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>PartialStandard(value, validators),
            (v)=>Or(v), (v)=>MessageMap(v)
        );

        expect(or.valid).toBe(true);
        expect(or.value).toEqual(value);

        expect(typeof or.validatables[0].message).toBe('string');
        expect(or.validatables[0].valid).toBe(true);

        expect(typeof or.validatables[1].message).toBe('string');
        expect(or.validatables[1].valid).toBe(false);

        expect(or.validatables[2]).toBe(<any>undefined);
        expect(or.validatables[3]).toBe(<any>undefined);

    });
});

