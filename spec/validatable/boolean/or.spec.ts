import {OrParameters} from '../../../dist/validatable/boolean/or.js';
import Validatable from '@axiona/validatable/validatable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('empty', function () {

    it('true', () => {

        const and = OrParameters<Validatable[]>([], true);
        expect(and).toBe(true);
    });

    it('false', () => {

        const and = OrParameters<Validatable[]>([], false);
        expect(and).toBe(false);
    });

});

describe('single', function() {

    describe('constructor', function () {

        it('true', () => {
            const and = OrParameters<Validatable[]>([{valid:true}], false);
            expect(and).toBe(true);
        });

        it('false', () => {
            const and = OrParameters<Validatable[]>([{valid:false}], true);
            expect(and).toBe(false);
        });
    });

});

describe('multi same', function() {


    it('valids', () => {
        const and = OrParameters<Validatable[]>([{valid:true}, {valid:true}], false);
        expect(and).toBe(true);
    });

    it('invalids', () => {
        const and = OrParameters<Validatable[]>([{valid:false}, {valid:false}], true);
        expect(and).toBe(false);
    });
});


describe('multi mixed', function() {

    it('valids', () => {

        const and = OrParameters<Validatable[]>([{valid:true}, {valid:false}], true);
        expect(and).toBe(true);
    });

    it('invalids', () => {

        const and = OrParameters<Validatable[]>([{valid:true}, {valid:false}], false);
        expect(and).toBe(true);
    });
});
