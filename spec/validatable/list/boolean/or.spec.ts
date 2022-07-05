import {OrParameters} from '../../../../dist/validatable/list/boolean/or.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('all true', function () {

    const record = [
        {valid:true},
        {valid:true},
    ];

    expect(OrParameters(record)).toBeTrue();
});

it('all false', function () {

    const record = [
        {valid:false},
        {valid:false},
    ];

    expect(OrParameters(record)).toBeFalse();
});


it('mixed', function () {

    const record = [
        {valid:true},
        {valid:false},
    ];

    expect(OrParameters(record)).toBeTrue();
});

