import {AndParameters} from '../../dist/validatable/and';
import Guard from '@alirya/validatable/boolean/validatable';
import Validatable from '@alirya/validatable/validatable';
import {EqualParameters} from '../../dist/boolean/equal';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('structure', function () {

    describe('subjects', function () {

        let subjects = [];
        let and = AndParameters<Validatable[]>(subjects, true);

        it('constructor', () => {
            expect(EqualParameters(subjects, and.validatables)).toBeTrue();
        });

        it('value', () => {
            expect([...and.validatables]).toEqual([...subjects]);
        });

        it('set', () => {
            and.validatables.push({valid:false});
            expect(EqualParameters(subjects, and.validatables)).toBeTrue();
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
            let and = AndParameters<Validatable[]>([], true);
            expect(and.valid).toBe(true);
        });

        it('false', () => {
            let and = AndParameters<Validatable[]>([], false);
            expect(and.valid).toBe(false);
        });

    });

    describe('set', function () {

        let and = AndParameters<Validatable[]>([], true);

        it('true', () => {
            expect(and.valid).toBe(true);
        });

    });

});

describe('single', function() {

    describe('constructor', function () {

        it('true', () => {
            let and = AndParameters<Validatable[]>([{valid:true}], false);
            expect(and.valid).toBe(true);
        });

        it('false', () => {
            let and = AndParameters<Validatable[]>([{valid:false}], true);
            expect(and.valid).toBe(false);
        });
    });

    describe('set', function () {


        it('true', () => {
            let and = AndParameters<Validatable[]>([{valid:true}], true);
            expect(and.valid).toBe(true);
        });

        it('false', () => {
            let and = AndParameters<Validatable[]>([{valid:false}], true);

            expect(and.valid).toBe(false);
        });

    });

});

describe('multi same', function() {



    it('valids', () => {
        let and = AndParameters<Validatable[]>([{valid:true}, {valid:true}], false);
        expect(and.valid).toBe(true);
    });

    it('iterator', ()=>{
        let and = AndParameters<Validatable[]>([{valid:true}, {valid:true}], false);
        let number = 0;

        for(let value of and.validatables) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    });

    it('invalids', () => {
        let and = AndParameters<Validatable[]>([{valid:false}, {valid:false}], false);
        expect(and.valid).toBe(false);
    });

    it('iterator', ()=>{
        let and = AndParameters<Validatable[]>([{valid:false}, {valid:false}], false);
        let number = 0;

        for(let value of and.validatables) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    });
});


describe('multi mixed', function() {

    let and = AndParameters<Validatable[]>([], false);

    it('valids', () => {
        and.validatables.push({valid:true}, {valid:false});
        expect(and.valid).toBe(false);
    });

    it('iterator', ()=>{

        let number = 0;

        for(let value of and.validatables) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    });

    it('invalids', () => {
        and.validatables.push({valid:true}, {valid:false});
        expect(and.valid).toBe(false);
    });

    it('iterator', ()=>{

        let number = 0;

        for(let value of and.validatables) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(4);

    });
});
