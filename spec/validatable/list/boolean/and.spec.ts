import {AndParameters} from '../../../../dist/validatable/list/boolean/and';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('all true', function () {

    let record = [
        {valid:true},
        {valid:true},
        {valid:true},
    ];

    expect(AndParameters(record)).toBeTrue();
});

it('all false', function () {

    let record = [
        {valid:false},
        {valid:false},
        {valid:false},
    ];

    expect(AndParameters(record)).toBeFalse();
});


it('mixed', function () {

    let record = [
        {valid:true},
        {valid:true},
        {valid:false},
    ];

    expect(AndParameters(record)).toBeFalse();
});

