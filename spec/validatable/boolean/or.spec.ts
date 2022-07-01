import {OrParameters} from '../../../dist/validatable/boolean/or';
import Validatable from '@alirya/validatable/validatable';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('empty', function () {

    it('true', () => {

        let and = OrParameters<Validatable[]>([], true);
        expect(and).toBe(true);
    });

    it('false', () => {

        let and = OrParameters<Validatable[]>([], false);
        expect(and).toBe(false);
    });

});

describe('single', function() {

    describe('constructor', function () {

        it('true', () => {
            let and = OrParameters<Validatable[]>([{valid:true}], false);
            expect(and).toBe(true);
        });

        it('false', () => {
            let and = OrParameters<Validatable[]>([{valid:false}], true);
            expect(and).toBe(false);
        });
    });

});

describe('multi same', function() {


    it('valids', () => {
        let and = OrParameters<Validatable[]>([{valid:true}, {valid:true}], false);
        expect(and).toBe(true);
    });

    it('invalids', () => {
        let and = OrParameters<Validatable[]>([{valid:false}, {valid:false}], true);
        expect(and).toBe(false);
    });
});


describe('multi mixed', function() {

    it('valids', () => {

        let and = OrParameters<Validatable[]>([{valid:true}, {valid:false}], true);
        expect(and).toBe(true);
    });

    it('invalids', () => {

        let and = OrParameters<Validatable[]>([{valid:true}, {valid:false}], false);
        expect(and).toBe(true);
    });
});
