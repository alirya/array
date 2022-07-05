import Standard from '../../../../dist/message/message/list/map.js';
import Message from '@alirya/message/message.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('flat & type explicit', ()=>{

    const data = [
        {message:1},
        {message:2},
        {message:3},
        {message:4},
        {message:5},
    ];

    const result = Standard(data);

    it('compiler compatibility', () => {


        let number : number;

        number = result[0];
        number = result[1];
        number = result[2];
        number = result[3];
        number = result[4];

        number = result[5];

        // @ts-expect-error
        const string : string = result[5];
    });


    it('check value', () => {

        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
        expect(result[4]).toBe(5);

    });

});


describe('flat & type implicit', ()=>{

    const data : [
        Message<number>,
        Message<number>,
        Message<number>,
        Message<number>,
        Message<number>,
    ] = [
        {message:1},
        {message:2},
        {message:3},
        {message:4},
        {message:5},
    ];

    const result = Standard(data);

    it('compiler compatibility', () => {


        let number : number;

        number = result[0];
        number = result[1];
        number = result[2];
        number = result[3];
        number = result[4];

        // @ts-expect-error
        number = result[5];

        // @ts-expect-error
        const string : string = result[5];
    });


    it('check value', () => {

        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
        expect(result[4]).toBe(5);

    });

});
