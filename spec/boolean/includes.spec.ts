import {IncludesParameters} from '../../dist/boolean/includes.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('true match', function() {

    it('default compare', function() {

        expect(IncludesParameters('true', ['true'], ['false'])).toBeTrue();
    });

    it('custom compare', function() {

        expect(IncludesParameters('true', ['TRUE'], ['FALSE'], undefined,
            (value1, value2) => value1.toLocaleLowerCase() === value2.toLocaleLowerCase()
        )).toBeTrue();
    });

});


describe('false match', function() {

    it('default compare', function() {

        expect(IncludesParameters('false', ['true'], ['false'])).toBeFalse();
    });

    it('custom compare', function() {

        expect(IncludesParameters('false', ['TRUE'], ['FALSE'], undefined,
            (value1, value2) => value1.toLocaleLowerCase() === value2.toLocaleLowerCase()
        )).toBeFalse();
    });
});


it('no match', function() {

    try {
        IncludesParameters('true', ['TRUE'], ['FALSE']);
        fail('exception should be thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it('default', function() {

    expect(IncludesParameters('false', ['TRUE'], ['FALSE'], ()=>true)).toBeTrue();
    expect(IncludesParameters('false', ['TRUE'], ['FALSE'], ()=>false)).toBeFalse();
});
