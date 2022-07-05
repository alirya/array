import List from '../../dist/boolean/list.js';
import GuardBoolean from '@alirya/boolean/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible',function() {

    it('guard',function() {

        const argument : unknown[] = [true, false, true, false];

        if(List(argument, GuardBoolean)) {

            const returns : boolean[] = argument;

        } else {

            // @ts-expect-error
            const returns : boolean[] = argument;
        }
    });

    it('boolean',function() {

        const argument : boolean[] = [true, false, true, false];

        if(List(argument, (value) : boolean => typeof value === 'boolean')) {

            const returns : boolean[] = argument;

        } else {

            const returns : boolean[] = argument;
        }
    });

});

it('boolean/boolean', () => {

    expect(List([true, false, true, false], GuardBoolean)).toBeTrue();
});

it('integer/boolean', () => {

    expect(List([1, 0, 2, 3], GuardBoolean)).toBeFalse();
});



