import List from '../../dist/boolean/list';
import GuardBoolean from '@alirya/boolean/boolean';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    describe(`guard`,function() {

        let argument : unknown[] = [true, false, true, false];

        if(List(argument, GuardBoolean)) {

            let returns : boolean[] = argument;

        } else {

            // @ts-expect-error
            let returns : boolean[] = argument;
        }
    });

    describe(`boolean`,function() {

        let argument : boolean[] = [true, false, true, false];

        if(List(argument, (value) : boolean => typeof value === 'boolean')) {

            let returns : boolean[] = argument;

        } else {

            let returns : boolean[] = argument;
        }
    });

});

it(`boolean/boolean`, () => {

    expect(List([true, false, true, false], GuardBoolean)).toBeTrue();
});

it(`integer/boolean`, () => {

    expect(List([1, 0, 2, 3], GuardBoolean)).toBeFalse();
});



