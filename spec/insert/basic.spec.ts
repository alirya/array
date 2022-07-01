import {InsertParameters} from '../../dist/insert';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('3 array', function() {

    describe('0 index', function() {

        let intersected = InsertParameters<number|string>([1,2,3], ['a'], 0);

        it('intersected', () => {
            expect(intersected).toEqual(['a',1,2,3]);
        });
    });

    describe('1 index', function() {

        let intersected = InsertParameters<number|string>([1,2,3], ['a'], 1);
        it('intersected', () => {
            expect(intersected).toEqual([1,'a',2,3]);
        });
    });

    describe('2 index', function() {

        let intersected = InsertParameters<number|string>([1,2,3], ['a'], 2);
        it('intersected', () => {
            expect(intersected).toEqual([1,2,'a',3]);
        });
    });

    describe('3 index (out of bound)', function() {

        let intersected = InsertParameters<number|string>([1,2,3], ['a'], 3);
        it('intersected', () => {
            expect(intersected).toEqual([1,2,3,'a']);
        });
    });

    describe('4 index (out of bound)', function() {

        let intersected = InsertParameters<number|string>([1,2,3], ['a'], 4);
        it('intersected', () => {
            expect(intersected).toEqual([1,2,3,undefined,'a']);
        });
    });
});
