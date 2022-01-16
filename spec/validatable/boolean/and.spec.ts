import And from '../../../dist/validatable/boolean/and-parameters';
import Validatable from '@alirya/validatable/validatable';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('empty', function () {

        it('true', () => {
            let and = And<Validatable[]>([], true);
            expect(and).toBe(true);
        });

        it('false', () => {
            let and = And<Validatable[]>([], false);
            expect(and).toBe(false);
        });
});

describe('single', function() {


        it('true', () => {
            let and = And<Validatable[]>([{valid:true}], false);
            expect(and).toBe(true);
        });

        it('false', () => {
            let and = And<Validatable[]>([{valid:false}], true);
            expect(and).toBe(false);
        });

});

describe('multi same', function() {

    it('valids', () => {

        let and = And<Validatable[]>([{valid:true}, {valid:true}], false);
        expect(and).toBe(true);
    });

    it('invalids', () => {

        let and = And<Validatable[]>([{valid:false}, {valid:false}], true);
        expect(and).toBe(false);
    });
});


describe('multi mixed', function() {

    it('valids', () => {
        let and = And<Validatable[]>([{valid:true}, {valid:false}], true);
        expect(and).toBe(false);
    });

    it('invalids', () => {

        let and = And<Validatable[]>([{valid:true}, {valid:false}], false);
        expect(and).toBe(false);
    });
});
