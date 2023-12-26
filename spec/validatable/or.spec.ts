import Or from '../../dist/validatable/or.js';
import Guard from '@axiona/validatable/boolean/validatable.js';
import Validatable from '@axiona/validatable/validatable.js';
import Equal from '../../dist/boolean/equal.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('structure', function () {

    describe('subjects', function () {

        const subjects = [];
        const and = Or.Parameters<Validatable[]>(subjects, true);

        it('constructor', () => {
            expect(Equal.Parameters(subjects, and.validatables)).toBeTrue();
        });

        it('value', () => {
            expect([...and.validatables]).toEqual([...subjects]);
        });

        it('set', () => {

            and.validatables.push({valid:false});
            expect(Equal.Parameters(subjects, and.validatables)).toBeTrue();
            expect(and.validatables[0].valid).toBeFalse();
        });

        it('value', () => {
            expect(<Validatable[]>subjects).toEqual(and.validatables);
        });
    });


});

describe('empty', function () {

    describe('initial', function () {

        it('true', () => {
            const and = Or.Parameters<Validatable[]>([], true);
            expect(and.valid).toBe(true);
        });

        it('false', () => {
            const and = Or.Parameters<Validatable[]>([], false);
            expect(and.valid).toBe(false);
        });

    });

    describe('set', function () {

        const and = Or.Parameters<Validatable[]>([], true);

        it('true', () => {

            expect(and.valid).toBe(true);
        });

    });

});

describe('single', function() {

    describe('constructor', function () {

        it('true', () => {
            const and = Or.Parameters<Validatable[]>([{valid:true}], false);
            expect(and.valid).toBe(true);
        });

        it('false', () => {
            const and = Or.Parameters<Validatable[]>([{valid:false}], true);
            expect(and.valid).toBe(false);
        });
    });

    describe('set', function () {

        const and = Or.Parameters<Validatable[]>([], true);

        it('true', () => {

            and.validatables.push({valid:true});
            expect(and.valid).toBe(true);
        });

        it('false', () => {

            and.validatables.push({valid:false});
            expect(and.valid).toBe(true);
        });

    });

});

describe('multi same', function() {

    it('valids', () => {
        const and = Or.Parameters<Validatable[]>([{valid:true}, {valid:true}], false);
        expect(and.valid).toBe(true);
    });

    it('iterator', ()=>{
        const and = Or.Parameters<Validatable[]>([{valid:true}, {valid:true}], false);
        let number = 0;

        for(const value of and.validatables) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    });

    it('invalids', () => {
        const and = Or.Parameters<Validatable[]>([{valid:false}, {valid:false}], false);
        expect(and.valid).toBe(false);
    });

    it('iterator', ()=>{
        const and = Or.Parameters<Validatable[]>([{valid:false}, {valid:false}], false);
        let number = 0;

        for(const value of and.validatables) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    });
});


describe('multi mixed', function() {



    it('valids', () => {
        const and = Or.Parameters<Validatable[]>([{valid:true}, {valid:false}], false);
        expect(and.valid).toBe(true);
    });

    it('iterator', ()=>{
        const and = Or.Parameters<Validatable[]>([{valid:true}, {valid:false}], false);
        let number = 0;

        for(const value of and.validatables) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    });

    it('invalids', () => {
        const and = Or.Parameters<Validatable[]>([{valid:true}, {valid:false}], false);
        expect(and.valid).toBe(true);
    });

    it('iterator', ()=>{
        const and = Or.Parameters<Validatable[]>([{valid:true}, {valid:false}], false);
        let number = 0;

        for(const value of and.validatables) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    });
});
