import {MapSingleParameters} from '../../../dist/boolean/map-single.js';
import {TypeParameters} from '@axiona/type/boolean/type.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('valid', function() {

    const values = [
        1,
        '1',
        true
    ];

    const validations = [
        (v)=>TypeParameters(v, 'number'),
        (v)=>TypeParameters(v, 'string'),
        (v)=>TypeParameters(v, 'boolean'),
    ];

    expect(MapSingleParameters(values, validations)).toBe(true);

});


it('invalid', function() {

    const values = [
        1,
        '1',
        1,
    ];

    const validations = [
        (v)=>TypeParameters(v, 'number'),
        (v)=>TypeParameters(v, 'string'),
        (v)=>TypeParameters(v, 'boolean'),
    ];

    expect(MapSingleParameters(values, validations)).toBe(false);

});
