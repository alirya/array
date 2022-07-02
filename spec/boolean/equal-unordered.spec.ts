import {EqualUnorderedParameters} from '../../dist/boolean/equal-unordered';
import {ShuffleParameters} from '../../dist/shuffle';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('equal', function() {

    it('ordered', () => {

        let data = [1,2,3,4,5,6,7,8,9,10];

        expect(EqualUnorderedParameters(data, data)).toBeTrue();
    });

    it('unordered', () => {

        let data = [1,2,3,4,5,6,7,8,9,10];

        expect(EqualUnorderedParameters(ShuffleParameters(data), ShuffleParameters(data))).toBeTrue();

    });
});

describe('not equal', function() {

    it('duplicate', () => expect(EqualUnorderedParameters(
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,1]
    )).toBeFalse());


    it('ordered missing', () => expect(EqualUnorderedParameters(
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9]
    )).toBeFalse());
});


describe('equal object', function() {

    let data1 = [
        {number:1},
        {number:2},
        {number:3},
        {number:4},
        {number:5},
    ];

    let data2 = [
        {number:1},
        {number:2},
        {number:3},
        {number:4},
        {number:5},
    ];

    it('ordered', () => {

        expect(EqualUnorderedParameters(data1, data2, (data1, data2)=>data1.number === data2.number)).toBeTrue();
    });

    it('unordered', () => {

        expect(EqualUnorderedParameters(ShuffleParameters(data1), ShuffleParameters(data2), (data1, data2)=>data1.number === data2.number)).toBeTrue();

    });
});

describe('not equal object', function() {

    let data1 = [
        {number:1},
        {number:2},
        {number:3},
        {number:4},
        {number:5},
    ];

    let data2 = [
        {number:1},
        {number:2},
        {number:3},
        {number:4},
    ];

    it('ordered', () => {

        expect(EqualUnorderedParameters(data1, data2, (data1, data2)=>data1.number === data2.number)).toBeFalse();
    });

    it('unordered', () => {

        expect(EqualUnorderedParameters(ShuffleParameters(data1), ShuffleParameters(data2), (data1, data2)=>data1.number === data2.number)).toBeFalse();

    });
});
