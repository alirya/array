import {AndParameters} from '../../../../dist/validatable/list/boolean/and.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('all true', function () {

    const record = [
        {valid:true},
        {valid:true},
        {valid:true},
    ];

    expect(AndParameters(record)).toBeTrue();
});

it('all false', function () {

    const record = [
        {valid:false},
        {valid:false},
        {valid:false},
    ];

    expect(AndParameters(record)).toBeFalse();
});


it('mixed', function () {

    const record = [
        {valid:true},
        {valid:true},
        {valid:false},
    ];

    expect(AndParameters(record)).toBeFalse();
});

