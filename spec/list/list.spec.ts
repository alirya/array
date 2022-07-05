import Convert from '../../dist/map.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('complex', () => {

    type Data = [string, number];

    const convert : Convert<Data, boolean> = [
         true,
         false,
    ];

});
