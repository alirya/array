import {ArrayUnique} from '../../dist/unique';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('parameters', function() {

    expect(ArrayUnique([1, 2, 1])).toEqual([1, 2]);
});

it('parameter', function() {

    expect(ArrayUnique({value:[1, 2, 1]})).toEqual([1, 2]);
});