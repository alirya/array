import Heads from '../../dist/heads.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('test 1', function() {


    const _0 : Heads<['a', 'b', 'c', 'd', 'e'], 0> = [];
    const _1 : Heads<['a', 'b', 'c', 'd', 'e'], 1> = ['a'];
    const _2 : Heads<['a', 'b', 'c', 'd', 'e'], 2> = ['a', 'b'];
    const _3 : Heads<['a', 'b', 'c', 'd', 'e'], 3> = ['a', 'b','c'];
    const _4 : Heads<['a', 'b', 'c', 'd', 'e'], 4> = ['a', 'b', 'c', 'd'];
    const _5 : Heads<['a', 'b', 'c', 'd', 'e'], 5> = ['a', 'b', 'c', 'd', 'e'];

});
