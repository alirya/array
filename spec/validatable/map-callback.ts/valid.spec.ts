import Map from '../../../dist/validatable/map-callback';
import Standard from '../../../dist/validator/validatable/list/map';
import And from '../../../dist/validatable/and';
import Or from '../../../dist/validatable/or';
import ValidatorInterface from '@alirya/validator/simple';
import MessageMap from '../../../dist/message/message/list/map';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

type TypeValidator = [
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
    ValidatorInterface<any, string, Instance<any, string>>,
];

type Type = [
    string,
    string,
    string,
];

let validator : TypeValidator = [
    TypeParameters('string'),
    TypeParameters('string'),
    TypeParameters('string'),
];

let value : Type = [
    'user',
    'name',
    'address',
];


it(`and validation`, () => {

    let validatable = new Map.Parameters(value, validator,
        (value, validators) => Standard.Parameters(value, validators),
        And.Parameters, (v)=>MessageMap(v)
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

    let validatable = new Map.Parameters(value, validator,
        (value, validators) => Standard.Parameters(value, validators),
        Or.Parameters, (v)=>MessageMap(v)
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

