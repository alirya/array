import Duplicate from "../dist/duplicate-parameters";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("duplicate", function() {

    describe("default compare", function() {

        it(`found`, () => {

            let result = Duplicate([0,1,2,3,4,5,1]);

            expect(result.length).toEqual(2, 'length');
            expect(result).toEqual([1,1], 'data');
        });

        it(`found all same`, () => {

            let result = Duplicate([1,1,1,1,1]);

            expect(result.length).toEqual(5, 'length');
            expect(result).toEqual([1,1,1,1,1], 'data');
        });

        it(`not found`, () => {

            let result = Duplicate([0,1,2,3,4,5]);

            expect(result.length).toEqual(0, 'length');
            expect(result).toEqual([], 'data')
        });
    });


    describe("custom compare", function() {

        it(`found`, () => {

            let found = [{number:2},{number:3},{number:1},{number:1}];
            let result = Duplicate(found, (v1, v2)=>v1.number === v2.number);

            expect(result.length).toEqual(2, 'length');
            expect(result).toEqual([found[2],found[3]])
        });

        it(`found multi`, () => {

            let found = [{number:1},{number:1},{number:2},{number:2}];
            let result = Duplicate(found, (v1, v2)=>v1.number === v2.number);

            expect(result.length).toEqual(4, 'length');
            expect(result).toEqual(found)
        });

        it(`not found`, () => {

            let notFound = [{number:2},{number:3},{number:1}];
            let result = Duplicate(notFound, (v1, v2)=>v1.number === v2.number);

            expect(result.length).toEqual(0, 'length');
            expect(result).toEqual([], 'data');
        });
    });

});




