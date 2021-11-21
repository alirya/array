import Or from "../../../dist/validatable/boolean/or-parameters";
import Validatable from "@dikac/t-validatable/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('empty', function () {

    it("true", () => {

        let and = Or<Validatable[]>([], true);
        expect(and).toBe(true)
    });

    it("false", () => {

        let and = Or<Validatable[]>([], false);
        expect(and).toBe(false)
    });

});

describe("single", function() {

    describe('constructor', function () {

        it("true", () => {
            let and = Or<Validatable[]>([{valid:true}], false);
            expect(and).toBe(true)
        });

        it("false", () => {
            let and = Or<Validatable[]>([{valid:false}], true);
            expect(and).toBe(false)
        });
    });

});

describe("multi same", function() {


    it("valids", () => {
        let and = Or<Validatable[]>([{valid:true}, {valid:true}], false);
        expect(and).toBe(true)
    });

    it("invalids", () => {
        let and = Or<Validatable[]>([{valid:false}, {valid:false}], true);
        expect(and).toBe(false)
    });
})


describe("multi mixed", function() {

    it("valids", () => {

        let and = Or<Validatable[]>([{valid:true}, {valid:false}], true);
        expect(and).toBe(true)
    });

    it("invalids", () => {

        let and = Or<Validatable[]>([{valid:true}, {valid:false}], false);
        expect(and).toBe(true)
    });
})
