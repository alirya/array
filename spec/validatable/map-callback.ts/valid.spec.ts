import Map from '../../../dist/validatable/map-callback.js';
import Standard from '../../../dist/validator/validatable/list/map.js';
import And from '../../../dist/validatable/and.js';
import Or from '../../../dist/validatable/or.js';
import ValidatorInterface from '@axiona/validator/simple.js';
import MessageMap from '../../../dist/message/message/list/map.js';
import {TypeParameters} from '@axiona/type/validator/type.js';
import Instance from '@axiona/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

type TypeValidator = [
    ValidatorInterface<any, string, string>,
    ValidatorInterface<any, string, string>,
    ValidatorInterface<any, string, string>,
];

type Type = [
    string,
    string,
    string,
];

const validator : TypeValidator = [
    TypeParameters('string'),
    TypeParameters('string'),
    TypeParameters('string'),
];

const value : Type = [
    'user',
    'name',
    'address',
];


it(`and validation`, () => {

    const validatable = new Map.Parameters(value, validator,
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

    const validatable = new Map.Parameters(value, validator,
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

