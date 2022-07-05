import Or from '../../../../dist/function/list/boolean/or.js';
it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


function Num(val : unknown) : val is number {

    return typeof val === 'number';
}

function Str(val : unknown) : val is string {

    return typeof val === 'string';
}


it('compiler compatible', function() {

    const value : unknown = 1;

    if(Or(value, [Num])) {

        const result : number = value;
        // @ts-expect-error
        const result2 : string = value;

    } else {

        // @ts-expect-error
        const result1 : number = value;
        // @ts-expect-error
        const result2 : string = value;
    }

    if(Or(value, [Num, Str])) {

        const result : number|string = value;

        // @ts-expect-error
        const result2 : number = value;
        // @ts-expect-error
        const result3 : string = value;

    } else {

        // @ts-expect-error
        const result : number|string = value;
        // @ts-expect-error
        const result2 : number = value;
        // @ts-expect-error
        const result3 : string = value;
    }
});

describe('single', function() {

    const ab = 1;

    it('one', () => {

        expect(Or(ab, [Str])).toBeFalse();
        expect(Or(ab, [Num])).toBeTrue();
    });

});

describe('multi', function() {

    const num = 1;


    it('number', () => {
        expect(Or(num, [Num, Str])).toBeTrue();
    });

    const str = '1;.js';

    it('string', () => {
        expect(Or(str, [Str, Num])).toBeTrue();
    });

});

