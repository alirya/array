import And from "../../../../dist/validatable/list/boolean/and-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it('all true', function () {

    let record = [
        {valid:true},
        {valid:true},
        {valid:true},
    ];

    expect(And(record)).toBeTrue();
});

it('all false', function () {

    let record = [
        {valid:false},
        {valid:false},
        {valid:false},
    ];

    expect(And(record)).toBeFalse();
});


it('mixed', function () {

    let record = [
        {valid:true},
        {valid:true},
        {valid:false},
    ];

    expect(And(record)).toBeFalse();
});

