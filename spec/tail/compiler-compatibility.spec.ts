import Tails from '../../dist/tails.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('test 1', function() {


    const _0 : Tails<['a', 'b', 'c', 'd', 'e'], 0> = ['b', 'c', 'd', 'e'];
    const _1 : Tails<['a', 'b', 'c', 'd', 'e'], 1> = ['c', 'd', 'e'];
    const _2 : Tails<['a', 'b', 'c', 'd', 'e'], 2> = ['d', 'e'];
    const _3 : Tails<['a', 'b', 'c', 'd', 'e'], 3> = ['e'];
    const _4 : Tails<['a', 'b', 'c', 'd', 'e'], 4> = [];
    const _5 : Tails<['a', 'b', 'c', 'd', 'e'], 5> = [];

});
