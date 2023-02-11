import And from '../../../../dist/function/list/boolean/and.js';
it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


interface A {
    a : number;
}

interface B {
    b : string;
}

function TypeA(val : unknown) : val is A {
    // @ts-ignore
    return typeof val.a === 'number';
}

function TypeB(val : unknown) : val is B {
    // @ts-ignore
    return typeof val.b === 'string';
}

it('compiler compatible', function() {

    const ab : A & B = {a:1, b:'b'};

    const value : unknown = ab;

    if(And(value, [TypeA])) {

        const result : A = value;
        // @ts-expect-error
        const result2 : B = value;

    } else {

        // @ts-expect-error
        const result1 : A = value;
        // @ts-expect-error
        const result2 : B = value;
    }

    if(And(value, [TypeB])) {

        // @ts-expect-error
        const result1 : A = value;
        const result2 : B = value;

    } else {

        // @ts-expect-error
        const result1 : A = value;
        // @ts-expect-error
        const result2 : B = value;
    }

    if(And(value, [TypeA, TypeB])) {

        const result1 : A = value;
        const result2 : B = value;

    } else {

        // @ts-expect-error
        const result1 : A = value;
        // @ts-expect-error
        const result2 : B = value;
    }

});

describe('all valid', function() {

    const ab : A & B = {a:1, b:'b'};

    it(`one`, () => {

        expect(And(ab, [TypeA])).toBeTrue();
        expect(And(ab, [TypeB])).toBeTrue();
    });

    it(`multi`, () => {
        expect(And(ab, [TypeA, TypeB])).toBeTrue();
    });

});

describe('mixed invalid', function() {

    const ab : A  = {a:1};

    it(`multi`, () => {
        expect(And(ab, [TypeA, TypeB])).toBeFalse();
    });

});

