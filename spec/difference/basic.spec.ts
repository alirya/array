import Difference from "../../dist/difference-parameters";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("primitive", function() {

    let target : number[] = [1,2,3,4,5];
    let compare : number[] = [2,3,4,6];
    let left = Difference(target, compare);
    it("left valid", () => expect(left).toEqual([1,5]));


    let right = Difference(compare, target);
    it("right valid", () => expect(right).toEqual([6]));

});

describe("custom comparison", function() {

    type Data = {
        string : String,
        number : Number,
        boolean : Boolean,
    }

    let target : Data[] = [
        {
            string : new String('str1'),
            number : new Number(1),
            boolean : new Boolean(true),
        }, {
            string : new String('str2'),
            number : new Number(2),
            boolean : new Boolean(false),
        }, {
            string : new String('str3'),
            number : new Number(3),
            boolean : new Boolean(true),
        }
    ];

    let compare : Data[] = [
         {
            string : new String('str2'),
            number : new Number(2),
            boolean : new Boolean(false),
        }, {
            string : new String('str4'),
            number : new Number(4),
            boolean : new Boolean(true),
        }
    ];

    it("left without", function() {

        let removed = Difference(target, compare);
        expect(target).toEqual(removed);

    });

    it("left with", function() {

        let removed = Difference(target, compare, (target: Data, comparison: Data) => target.string.toString() === comparison.string.toString());
        expect(target).not.toEqual(removed);
        expect(2).toBe(removed.length);

        expect(target[0]).toEqual(removed[0]);
        expect(target[2]).toEqual(removed[1]);

    });


    it("right without", function() {

        let removed = Difference(compare, target);
        expect(compare).toEqual(removed);

    });

    it("right with", function() {

        let removed = Difference(compare, target, (target: Data, comparison: Data) => target.string.toString() === comparison.string.toString());
        expect(target).not.toEqual(removed);
        expect(1).toBe(removed.length);

        expect(compare[1]).toEqual(removed[0]);

    });
});
