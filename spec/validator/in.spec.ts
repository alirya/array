import Validator from '../../dist/validator/in';
import ObjectMessage from '../../dist/assert/string/in';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it(`valid`,function() {

    let validator = Validator.Parameters([1, 2, 3], undefined, ObjectMessage.Parameters);
    let validatable = validator(1);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toEqual(1);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validator = Validator.Parameters([1, 2, 3], undefined, ObjectMessage.Parameters);
    let validatable = validator(4);

    expect<boolean>(validatable.valid).toBe(false);
    expect(validatable.value).toBe(4);
    expect(typeof validatable.message).toBe('string');

});



