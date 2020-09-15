import Map from "../../../dist/validatable/map-callback";
import Standard from "../../../dist/validator/validatable/list/map";
import PartialStandard from "../../../dist/validator/validatable/list/map-partial";
import And from "../../../dist/validatable/and";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/simple";
import ValueInterface from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import MessageMap from "../../../dist/message/message/list/map";
import ValidatorType from "@dikac/t-type/validator/type-standard";
import Instance from "@dikac/t-validator/validatable/validatable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("explicit typed", function() {

    type TypeValidator = [
        ValidatorInterface<any, string, Instance<any, string>>,
        ValidatorInterface<any, string, Instance<any, string>>,
    ];

    type Type = [
        string,
        string,
    ];

    let validator : TypeValidator = [
        ValidatorType('string'),
        ValidatorType('string'),
    ];

    let value : Type = [
        'name',
        'address',
    ];

    describe("auto", function() {

        let validatable = new Map(value, validator,
            (value, validators) => Standard(value, validators),
            And,
            (v)=>MessageMap(v)
        );

        let unknown : unknown = validatable.value;

        let record : Type = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        // @ts-expect-error
        instance = validatable.validatables[3];
        // @ts-expect-error
        instance = validatable.validatables[4];
    });

    describe("auto partial", function() {

        let validatable = new Map(value, validator,
            (value, validators) =>
                <(Validatable & ValueInterface & Message<string>)[]>PartialStandard(value, validators),
            And,
            (v)=>MessageMap(v)
        );

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        instance = validatable.validatables[3];
        instance = validatable.validatables[4];
    });
});


describe("explicit typed", function() {

    let validator  = [
        ValidatorType('string'),
        ValidatorType('string'),
    ];

    let value  = [
        'name',
        'address',
    ];


    describe("auto", function() {

        let validatable = new Map(value, validator,
            (value, validators) => Standard(value, validators),
            And, (v)=>MessageMap(v)
        );

        let unknown : unknown = validatable.value;

        let value1 : string[] = validatable.value;

        // @ts-expect-error
        let value2 : [string, string] = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        instance = validatable.validatables[3];
        instance = validatable.validatables[4];
    });

    describe("auto partial", function() {

        let validatable = new Map(value, validator,
            (value, validators) =>
                <(Validatable & ValueInterface & Message<string>)[]>PartialStandard(value, validators),
            And, (v)=>MessageMap(v)
        );

        let unknown : unknown = validatable.value;

        let value1 : string[] = validatable.value;

        // @ts-expect-error
        let value2 : [string, string] = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        instance = validatable.validatables[3];
        instance = validatable.validatables[4];
    });
});


