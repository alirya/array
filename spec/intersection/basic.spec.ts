import {IntersectionParameters} from '../../dist/intersection';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test 1', function() {

    let intersected = IntersectionParameters( [[1,2],[3,1],[2,3,1]]);
    it('intersected', () => expect([1]).toEqual(intersected));
});

describe('test 2', function() {

    let intersected = IntersectionParameters<any>( [[1,2],[2,3,1],[2,3,'1']]);
    it('intersected', () => expect([2]).toEqual(intersected));

});

describe('test object', function() {

    let a = [{number:1},{number:2}];
    let b = [{number:2},{number:3},{number:1}];
    let c = [{number:2},{number:3},{number:1}];

    let intersected = IntersectionParameters([a, b, c], (v1, v2)=>v1.number === v2.number);
    it('intersected', () => expect([a[0], a[1]]).toEqual(intersected));

});
