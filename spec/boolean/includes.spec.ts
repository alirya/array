import Includes from '../../dist/boolean/includes-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('true match', function() {

    it('default compare', function() {

        expect(Includes('true', ['true'], ['false'])).toBeTrue();
    });

    it('custom compare', function() {

        expect(Includes('true', ['TRUE'], ['FALSE'], undefined,
            (value1, value2) => value1.toLocaleLowerCase() === value2.toLocaleLowerCase()
        )).toBeTrue();
    });

});


describe('false match', function() {

    it('default compare', function() {

        expect(Includes('false', ['true'], ['false'])).toBeFalse();
    });

    it('custom compare', function() {

        expect(Includes('false', ['TRUE'], ['FALSE'], undefined,
            (value1, value2) => value1.toLocaleLowerCase() === value2.toLocaleLowerCase()
        )).toBeFalse();
    });
});


it('no match', function() {

    try {
        Includes('true', ['TRUE'], ['FALSE']);
        fail('exception should be thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it('default', function() {

    expect(Includes('false', ['TRUE'], ['FALSE'], ()=>true)).toBeTrue();
    expect(Includes('false', ['TRUE'], ['FALSE'], ()=>false)).toBeFalse();
});
