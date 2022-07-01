import {AndParameters} from '../../../dist/validatable/boolean/and';
import Validatable from '@alirya/validatable/validatable';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('empty', function () {

        it('true', () => {
            let and = AndParameters<Validatable[]>([], true);
            expect(and).toBe(true);
        });

        it('false', () => {
            let and = AndParameters<Validatable[]>([], false);
            expect(and).toBe(false);
        });
});

describe('single', function() {


        it('true', () => {
            let and = AndParameters<Validatable[]>([{valid:true}], false);
            expect(and).toBe(true);
        });

        it('false', () => {
            let and = AndParameters<Validatable[]>([{valid:false}], true);
            expect(and).toBe(false);
        });

});

describe('multi same', function() {

    it('valids', () => {

        let and = AndParameters<Validatable[]>([{valid:true}, {valid:true}], false);
        expect(and).toBe(true);
    });

    it('invalids', () => {

        let and = AndParameters<Validatable[]>([{valid:false}, {valid:false}], true);
        expect(and).toBe(false);
    });
});


describe('multi mixed', function() {

    it('valids', () => {
        let and = AndParameters<Validatable[]>([{valid:true}, {valid:false}], true);
        expect(and).toBe(false);
    });

    it('invalids', () => {

        let and = AndParameters<Validatable[]>([{valid:true}, {valid:false}], false);
        expect(and).toBe(false);
    });
});
