import {MapParameters} from '../../../dist/boolean/map.js';
import {TypeParameters} from '@alirya/type/boolean/type.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('valid', function() {

    const values = [
        [1],
        ['1'],
        [true]
    ];

    const validations = [
        (v)=>TypeParameters(v, 'number'),
        (v)=>TypeParameters(v, 'string'),
        (v)=>TypeParameters(v, 'boolean'),
    ];

    expect(MapParameters(values, validations)).toBe(true);
});


it('invalid', function() {

    const values = [
        [1],
        ['1'],
        [1]
    ];

    const validations = [
        (v)=>TypeParameters(v, 'number'),
        (v)=>TypeParameters(v, 'string'),
        (v)=>TypeParameters(v, 'boolean'),
    ];

    expect(MapParameters(values, validations)).toBe(false);

});
