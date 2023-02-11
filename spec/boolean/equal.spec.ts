import {EqualParameters} from '../../dist/boolean/equal.js';
import {ShuffleParameters} from '../../dist/shuffle.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('equal', function() {

    it('ordered', () => {

        const data = [1,2,3,4,5,6,7,8,9,10];

        expect(EqualParameters(data, data)).toBeTrue();
    });

});

describe('not equal', function() {

    it('duplicate', () => expect(EqualParameters(
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,1]
    )).toBeFalse());


    it('ordered missing', () => expect(EqualParameters(
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9]
    )).toBeFalse());
});


describe('equal object', function() {

    const data1 = [
        {number:1},
        {number:2},
        {number:3},
        {number:4},
        {number:5},
    ];

    const data2 = [
        {number:1},
        {number:2},
        {number:3},
        {number:4},
        {number:5},
    ];

    it('ordered', () => {

        expect(EqualParameters(data1, data2, (data1, data2)=>data1.number === data2.number)).toBeTrue();
    });

});

describe('not equal object', function() {

    const data1 = [
        {number:1},
        {number:2},
        {number:3},
        {number:4},
        {number:5},
    ];

    const data2 = [
        {number:1},
        {number:2},
        {number:3},
        {number:4},
    ];

    it('ordered', () => {

        expect(EqualParameters(data1, data2, (data1, data2)=>data1.number === data2.number)).toBeFalse();
    });

});
