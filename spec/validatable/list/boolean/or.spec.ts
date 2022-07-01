import {OrParameters} from '../../../../dist/validatable/list/boolean/or';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('all true', function () {

    let record = [
        {valid:true},
        {valid:true},
    ];

    expect(OrParameters(record)).toBeTrue();
});

it('all false', function () {

    let record = [
        {valid:false},
        {valid:false},
    ];

    expect(OrParameters(record)).toBeFalse();
});


it('mixed', function () {

    let record = [
        {valid:true},
        {valid:false},
    ];

    expect(OrParameters(record)).toBeTrue();
});

