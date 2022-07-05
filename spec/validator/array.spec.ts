import Validator from '../../dist/validator/array.js';
import ObjectMessage from '../../dist/validatable/string/array.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible',function() {

    it('valid value',function() {

        const validator = Validator.Parameters(ObjectMessage.Parameters);
        const validatable = validator(<unknown>[]);

        if(validatable.valid) {

            // compiler pass
            const object : object = validatable.value;
            expect(object).toEqual([]);

        } else {

            // @ts-expect-error
            const object : object = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it('invalid value',function() {

        const validator = Validator.Parameters(ObjectMessage.Parameters);
        const validatable = validator(1);

        if(validatable.valid) {

            // compiler pass
            const object : object = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            const object : object = validatable.value;
            // @ts-expect-error
            expect(object).toEqual(1);
        }
    });

    it('readonly',function() {

        const validator = Validator.Parameters(ObjectMessage.Parameters);
        const validatable = validator({});

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

        try {
            // @ts-expect-error
            validatable.message = 'message.js';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it('valid',function() {

    const validator = Validator.Parameters(ObjectMessage.Parameters);
    const validatable = validator([]);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toEqual([]);
    expect(typeof validatable.message).toBe('string');

});

it('invalid',function() {

    const validator = Validator.Parameters(ObjectMessage.Parameters);
    const validatable = validator('a');

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe('string');

});



