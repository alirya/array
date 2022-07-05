import {IntersectionParameters} from '../../dist/intersection.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test 1', function() {

    const intersected = IntersectionParameters( [[1,2],[3,1],[2,3,1]]);
    it('intersected', () => expect([1]).toEqual(intersected));
});

describe('test 2', function() {

    const intersected = IntersectionParameters<any>( [[1,2],[2,3,1],[2,3,'1']]);
    it('intersected', () => expect([2]).toEqual(intersected));

});

describe('test object', function() {

    const a = [{number:1},{number:2}];
    const b = [{number:2},{number:3},{number:1}];
    const c = [{number:2},{number:3},{number:1}];

    const intersected = IntersectionParameters([a, b, c], (v1, v2)=>v1.number === v2.number);
    it('intersected', () => expect([a[0], a[1]]).toEqual(intersected));

});
