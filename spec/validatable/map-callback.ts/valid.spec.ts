import Map from "../../../dist/validatable/map-callback-parameters";
import Standard from "../../../dist/validator/validatable/list/map-parameters";
import And from "../../../dist/validatable/and-parameters";
import Or from "../../../dist/validatable/or-parameters";
import ValidatorInterface from "@dikac/t-validator/simple";
import MessageMap from "../../../dist/message/message/list/map";
import ValidatorType from "@dikac/t-type/validator/type-parameters";
import Instance from "@dikac/t-validator/validatable/dynamic";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

type TypeValidator = [
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
];

type Type = [
    string,
    string,
    string,
]

let validator : TypeValidator = [
    ValidatorType('string'),
    ValidatorType('string'),
    ValidatorType('string'),
];

let value : Type = [
    'user',
    'name',
    'address',
];


it(`and validation`, () => {

    let validatable = new Map(value, validator,
        (value, validators) => Standard(value, validators),
        And, (v)=>MessageMap(v)
    );

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toEqual(value);

    expect(validatable.validatables[0].valid).toBe(true);
    expect(typeof validatable.validatables[0].message).toBe('string');

    expect(validatable.validatables[1].valid).toBe(true);
    expect(typeof validatable.validatables[1].message).toBe('string');

    expect(validatable.validatables[2].valid).toBe(true);
    expect(typeof validatable.validatables[2].message).toBe('string');

    // @ts-expect-error
    expect(validatable.validatables[3]).toBe(undefined);
});

it(`or validation`, () => {

    let validatable = new Map(value, validator,
        (value, validators) => Standard(value, validators),
        Or, (v)=>MessageMap(v)
    );

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toEqual(value);

    expect(validatable.validatables[0].valid).toBe(true);
    expect(typeof validatable.validatables[0].message).toBe('string');

    expect(validatable.validatables[1].valid).toBe(true);
    expect(typeof validatable.validatables[1].message).toBe('string');

    expect(validatable.validatables[2].valid).toBe(true);
    expect(typeof validatable.validatables[2].message).toBe('string');

    // @ts-expect-error
    expect(validatable.validatables[3]).toBe(undefined);
});

