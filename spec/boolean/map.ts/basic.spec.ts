import {MapParameters} from '../../../dist/boolean/map';
import {TypeParameters} from '@alirya/type/boolean/type';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('valid', function() {

    let values = [
        [1],
        ['1'],
        [true]
    ];

    let validations = [
        (v)=>TypeParameters(v, 'number'),
        (v)=>TypeParameters(v, 'string'),
        (v)=>TypeParameters(v, 'boolean'),
    ];

    expect(MapParameters(values, validations)).toBe(true);
});


it('invalid', function() {

    let values = [
        [1],
        ['1'],
        [1]
    ];

    let validations = [
        (v)=>TypeParameters(v, 'number'),
        (v)=>TypeParameters(v, 'string'),
        (v)=>TypeParameters(v, 'boolean'),
    ];

    expect(MapParameters(values, validations)).toBe(false);

});
