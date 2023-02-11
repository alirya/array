import Validator from '../../dist/validator/in.js';
import ObjectMessage from '../../dist/assert/string/in.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it(`valid`,function() {

    const validator = Validator.Parameters([1, 2, 3], undefined, ObjectMessage.Parameters);
    const validatable = validator(1);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toEqual(1);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    const validator = Validator.Parameters([1, 2, 3], undefined, ObjectMessage.Parameters);
    const validatable = validator(4);

    expect<boolean>(validatable.valid).toBe(false);
    expect(validatable.value).toBe(4);
    expect(typeof validatable.message).toBe('string');

});



