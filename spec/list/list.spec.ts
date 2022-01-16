import Convert from '../../dist/map';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('complex', () => {

    type Data = [string, number];

    let convert : Convert<Data, boolean> = [
         true,
         false,
    ];

});
