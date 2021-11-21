import RemovesValue from "../dist/removes-value-parameters";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("exists", function() {

    let array : number[] = [1,2,3,1,5];
    let removed = RemovesValue(array, 1);
    it("removed", () => expect([1,1]).toEqual(removed));
    it("original", () => expect([2,3,5]).toEqual(array));
});

describe("limit", function() {

    let array : number[] = [1,2,3,1,5];
    let removed = RemovesValue(array, 1, undefined, undefined, undefined, 1);

    it("removed", () => expect([1]).toEqual(removed));
    it("original", () => expect([2,3,1,5]).toEqual(array));

});
