import And from '../../../../dist/function/list/boolean/and';
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

    let ab : A & B = {a:1, b:'b'};

    let value : unknown = ab;

    if(And(value, [TypeA])) {

        let result : A = value;
        // @ts-expect-error
        let result2 : B = value;

    } else {

        // @ts-expect-error
        let result1 : A = value;
        // @ts-expect-error
        let result2 : B = value;
    }

    if(And(value, [TypeB])) {

        // @ts-expect-error
        let result1 : A = value;
        let result2 : B = value;

    } else {

        // @ts-expect-error
        let result1 : A = value;
        // @ts-expect-error
        let result2 : B = value;
    }

    if(And(value, [TypeA, TypeB])) {

        let result1 : A = value;
        let result2 : B = value;

    } else {

        // @ts-expect-error
        let result1 : A = value;
        // @ts-expect-error
        let result2 : B = value;
    }

});

describe('all valid', function() {

    let ab : A & B = {a:1, b:'b'};

    it(`one`, () => {

        expect(And(ab, [TypeA])).toBeTrue();
        expect(And(ab, [TypeB])).toBeTrue();
    });

    it(`multi`, () => {
        expect(And(ab, [TypeA, TypeB])).toBeTrue();
    });

});

describe('mixed invalid', function() {

    let ab : A  = {a:1};

    it(`multi`, () => {
        expect(And(ab, [TypeA, TypeB])).toBeFalse();
    });

});

