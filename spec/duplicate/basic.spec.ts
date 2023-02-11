import {DuplicateParameters} from '../../dist/duplicate.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('duplicate', function() {

    describe('default compare', function() {

        it(`found`, () => {

            const result = DuplicateParameters([0,1,2,3,4,5,1]);

            expect(result.length).withContext('length').toEqual(2);
            expect(result).withContext('data').toEqual([1,1]);
        });

        it(`found all same`, () => {

            const result = DuplicateParameters([1,1,1,1,1]);

            expect(result.length).withContext('length').toEqual(5);
            expect(result).withContext('data').toEqual([1,1,1,1,1]);
        });

        it(`not found`, () => {

            const result = DuplicateParameters([0,1,2,3,4,5]);

            expect(result.length).withContext('length').toEqual(0);
            expect(result).withContext('data').toEqual([]);
        });
    });


    describe('custom compare', function() {

        it(`found`, () => {

            const found = [{number:2},{number:3},{number:1},{number:1}];
            const result = DuplicateParameters(found, (v1, v2)=>v1.number === v2.number);

            expect(result.length).withContext('length').toEqual(2, );
            expect(result).toEqual([found[2],found[3]]);
        });

        it(`found multi`, () => {

            const found = [{number:1},{number:1},{number:2},{number:2}];
            const result = DuplicateParameters(found, (v1, v2)=>v1.number === v2.number);

            expect(result.length).withContext('length').toEqual(4);
            expect(result).toEqual(found);
        });

        it(`not found`, () => {

            const notFound = [{number:2},{number:3},{number:1}];
            const result = DuplicateParameters(notFound, (v1, v2)=>v1.number === v2.number);

            expect(result.length).withContext('length').toEqual(0);
            expect(result).withContext('data').toEqual([]);
        });
    });

});




