import {AndParameters} from '../../../dist/validatable/boolean/and.js';
import Validatable from '@alirya/validatable/validatable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('empty', function () {

        it('true', () => {
            const and = AndParameters<Validatable[]>([], true);
            expect(and).toBe(true);
        });

        it('false', () => {
            const and = AndParameters<Validatable[]>([], false);
            expect(and).toBe(false);
        });
});

describe('single', function() {


        it('true', () => {
            const and = AndParameters<Validatable[]>([{valid:true}], false);
            expect(and).toBe(true);
        });

        it('false', () => {
            const and = AndParameters<Validatable[]>([{valid:false}], true);
            expect(and).toBe(false);
        });

});

describe('multi same', function() {

    it('valids', () => {

        const and = AndParameters<Validatable[]>([{valid:true}, {valid:true}], false);
        expect(and).toBe(true);
    });

    it('invalids', () => {

        const and = AndParameters<Validatable[]>([{valid:false}, {valid:false}], true);
        expect(and).toBe(false);
    });
});


describe('multi mixed', function() {

    it('valids', () => {
        const and = AndParameters<Validatable[]>([{valid:true}, {valid:false}], true);
        expect(and).toBe(false);
    });

    it('invalids', () => {

        const and = AndParameters<Validatable[]>([{valid:true}, {valid:false}], false);
        expect(and).toBe(false);
    });
});
