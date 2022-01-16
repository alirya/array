import Invalid from "../../../dist/validatable/list/invalid";
import Validatable from "@alirya/validatable/validatable";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let record : [
    Validatable,
    Validatable,
    Validatable,
    Validatable
] = [
    {valid:false},
    {valid:true},
    {valid:false},
    {valid:true},
];

describe("check property", function() {

    let result = Invalid(record);

    it("invalid", () => {

        if(result[0]) {

            expect(result[0].valid).toBe(false);

        } else {

            fail('property is not exits')
        }
    });

    it("invalid", () => {

        if(result[1]) {

            expect(result[1].valid).toBe(false);

        } else {

            fail('property is not exits')
        }
    });
    it("valid", () => {

        expect(result[2]).toBeUndefined();
    });


    it("valid", () => {

        expect(result[3]).toBeUndefined();
    });

});
