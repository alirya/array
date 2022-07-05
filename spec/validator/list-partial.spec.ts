import {TypeParameters} from '@alirya/type/validator/type.js';
import List from '../../dist/validator/list-partial.js';
import And from '../../dist/validatable/and.js';
import Validatable from '@alirya/validatable/validatable.js';
import MessageMap from '../../dist/message/message/list/map.js';
import ValidatablesInterface from '../../dist/validatable/validatables/validatables.js';
import Validatables from '../../dist/validatable/validatables/validatables.js';
import SimpleValidator from '@alirya/validator/simple.js';
import Or from '../../dist/validatable/or.js';
import Instance from '@alirya/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    describe('implicit partial', function() {

        const validator = TypeParameters('string');

        const value = [
            'name',
            'address',
        ];

        const property = List.Parameters(validator, (v)=>And.Parameters(v), MessageMap);

        const validatable = property(value);

        let key : Validatable;

        key = validatable.validatables[0];

        key = validatable.validatables[1];

        key = validatable.validatables[2];

        const validatables : ValidatablesInterface = validatable;

        const record : Validatable[] = validatable.validatables;

        const validatable1 : Validatables = validatable;

        const unknown : unknown = validatable.value;

        const string : string[] = validatable.value;

        it('recursive', function() {

            const validator = TypeParameters('string');
            const list1 = List.Parameters(validator, And.Parameters, MessageMap);
            const list2 = List.Parameters(list1, And.Parameters, MessageMap);
            // @ts-expect-errors
            const list3 = List.Parameters(list2, And.Parameters, MessageMap);
        });

    });

    describe('explicit complete', function() {

        type TypeValidator = SimpleValidator<any, string, Instance<any, string>>;

        const validator : TypeValidator = TypeParameters('string');

        type Type = [
            string,
            string,
        ];

        const value : Type = [
            'name',
            'address',
        ];

        it('auto', function() {

            const property = List.Parameters/*<unknown[], Type>*/(validator, And.Parameters, MessageMap);

            const validatable = property(value);

            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];

            key = validatable.validatables[2];

            const validatables : ValidatablesInterface = validatable;

            const record : Validatable[] = validatable.validatables;

            const validatable1 : Validatables = validatable;

            const unknown : unknown = validatable.value;

            const string : Type = validatable.value;
        });

        it('direct', function() {

            const property = List.Parameters(validator, And.Parameters, MessageMap);

            const validatable = property(value);

            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];

            key = validatable.validatables[2];

            const validatables : ValidatablesInterface = validatable;

            const record : Validatable[] = validatable.validatables;

            const validatable1 : Validatables = validatable;

            const unknown : unknown = validatable.value;

            const string : Type|unknown[] = validatable.value;
        });
    });
});





describe('all valid', function() {

    const validator = TypeParameters('string');

    const value = [
        'user',
        'name',
        'address',
    ];

    it('check validate return', () => {

        const property = List.Parameters(validator, And.Parameters, MessageMap);
        const validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 0 should exits');
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(true);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 1 should exits');
        }

        if(validatable.validatables[2]) {
            expect(validatable.validatables[2].valid).toBe(true);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 2 should exits');
        }
    });

    it('check handler and', () => {

        const property = List.Parameters(validator, And.Parameters, MessageMap);
        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

    it('check handler or', () => {

        const property = List.Parameters(validator, Or.Parameters, MessageMap);
        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

});

describe('mixed', function() {

    const validator = TypeParameters('string');

    const value = [
        'user',
        1,
        'address',
    ];

    it('check validate return', () => {

        const property = List.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 0 should exits');
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(false);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 1 should exits');
        }

        if(validatable.validatables[2]) {
            fail('index 2 should not exits');
        }

    });

    it('check handler and', () => {

        const property = List.Parameters(validator,(v)=>And.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

    it('check handler or', () => {

        const property = List.Parameters(validator,(v)=>Or.Parameters(<Validatable[]>v), MessageMap);
        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

});

describe('all invalid', function() {

    const validator = TypeParameters('number');

    const value = [
        'user',
        'name',
        'address',
    ];

    it('check validate return', () => {

        const property = List.Parameters(validator, And.Parameters, MessageMap);
        const validatable = property(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(false);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 1 should exits');
        }

        if(validatable.validatables[1]) {
            fail('index 2 should not exits');
        }

        if(validatable.validatables[2]) {
            fail('index 3 should not exits');
        }
    });

    it('check handler and', () => {

        const property = List.Parameters(validator, And.Parameters, MessageMap);
        const validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

    it('check handler or', () => {

        const property = List.Parameters(validator, Or.Parameters, MessageMap);
        const validatable = property(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

});

