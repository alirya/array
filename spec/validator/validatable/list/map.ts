import {MapParameters} from '../../../../dist/validator/validatable/list/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';


it('force console log', () => spyOn(console, 'log').and.callThrough());

describe('simple validatable', function() {

    const validator = [
        TypeParameters('number'), //new Num(),
        TypeParameters('number'), //new NumAny(),
        TypeParameters('string'), //new Str(),
        TypeParameters('string'), //new StrAny(),
        TypeParameters('number'), //new Num(),
        TypeParameters('number'), //new NumAny(),
        TypeParameters('string'), //new Str(),
        TypeParameters('string'), //new StrAny(),
    ];

    const value = [
        10,
        10,
        'str',
        'str',
        10,
        'str',
        'str',
        10,
    ];

    const result = MapParameters(value, validator);
    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator4', ()=> expect(result[2].valid).toBe(true));
    it('match validator5', ()=> expect(result[3].valid).toBe(true));
    it('match validator7', ()=> expect(result[4].valid).toBe(true));
    it('match validator8', ()=> expect(result[5].valid).toBe(false));
    it('match validator10', ()=> expect(result[6].valid).toBe(true));
    it('match validator11', ()=> expect(result[7].valid).toBe(false));

});


describe('simple validatable', function() {

    const validator = [
        TypeParameters('number'), //new Num(),
        TypeParameters('number'), //new NumAny(),
        TypeParameters('string'), //new Str(),
        TypeParameters('string'), //new StrAny(),
        TypeParameters('number'), //new Num(),
        TypeParameters('number'), //new NumAny(),
        TypeParameters('string'), //new Str(),
        TypeParameters('string'), //new StrAny()
    ];

    const value = [
        10,
        10,
        'str',
        'str',
        10,
        'str',
        'str',
        10,
    ];

    const result = MapParameters(value, validator);
    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator4', ()=> expect(result[2].valid).toBe(true));
    it('match validator5', ()=> expect(result[3].valid).toBe(true));
    it('match validator7', ()=> expect(result[4].valid).toBe(true));
    it('match validator8', ()=> expect(result[5].valid).toBe(false));
    it('match validator10', ()=> expect(result[6].valid).toBe(true));
    it('match validator11', ()=> expect(result[7].valid).toBe(false));

});


describe('extended validatable', function() {

    const validator = [
        TypeParameters('number'), //new ExtendedNum(),
        TypeParameters('number'), //new ExtendedNumAny(),
        TypeParameters('string'), //new ExtendedStr(),
        TypeParameters('string'), //new ExtendedStrAny(),
        TypeParameters('number'), //new ExtendedNum(),
        TypeParameters('number'), //new ExtendedNumAny(),
        TypeParameters('string'), //new ExtendedStr(),
        TypeParameters('string'), //new ExtendedStrAny(),
    ];

    const value = [
        10,
        10,
        'str',
        'str',
        10,
        'str',
        'str',
        10,

    ];

    const result = MapParameters(value, validator);

    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator1', ()=> expect(result[0].message).toBe('value is type of "number"'));
    it('match validator1', ()=> expect(result[0].value).toBe(10));

    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].message).toBe('value is type of "number"'));
    it('match validator2', ()=> expect(result[1].value).toBe(10));

    it('match validator4', ()=> expect(result[2].valid).toBe(true));
    it('match validator4', ()=> expect(result[2].message).toBe('value is type of "string"'));
    it('match validator4', ()=> expect(result[2].value).toBe('str'));

    it('match validator5', ()=> expect(result[3].valid).toBe(true));
    it('match validator5', ()=> expect(result[3].message).toBe('value is type of "string"'));
    it('match validator5', ()=> expect(result[3].value).toBe('str'));

    it('match validator7', ()=> expect(result[4].valid).toBe(true));
    it('match validator7', ()=> expect(result[4].message).toBe('value is type of "number"'));
    it('match validator7', ()=> expect(result[4].value).toBe(10));

    it('match validator8', ()=> expect(result[5].valid).toBe(false));
    it('match validator8', ()=> expect(result[5].message).toBe('value is not type of "number"'));
    it('match validator8', ()=> expect(result[5].value).toBe('str'));

    it('match validator10', ()=> expect(result[6].valid).toBe(true));
    it('match validator10', ()=> expect(result[6].message).toBe('value is type of "string"'));
    it('match validator10', ()=> expect(result[6].value).toBe('str'));

    it('match validator11', ()=> expect(result[7].valid).toBe(false));
    it('match validator11', ()=> expect(result[7].message).toBe('value is not type of "string"'));
    it('match validator11', ()=> expect(result[7].value).toBe(10));


});
