import Standard from '../../../../dist/message/message/list/map';
import Message from '@alirya/message/message';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('flat & type explicit', ()=>{

    let data = [
        {message:1},
        {message:2},
        {message:3},
        {message:4},
        {message:5},
    ];

    let result = Standard(data);

    describe('compiler compatibility', () => {


        let number : number;

        number = result[0];
        number = result[1];
        number = result[2];
        number = result[3];
        number = result[4];

        number = result[5];

        // @ts-expecerror
        let string : string = result[5];
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

    let data : [
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

    let result = Standard(data);

    describe('compiler compatibility', () => {


        let number : number;

        number = result[0];
        number = result[1];
        number = result[2];
        number = result[3];
        number = result[4];

        // @ts-expecerror
        number = result[5];

        // @ts-expecerror
        let string : string = result[5];
    });


    it('check value', () => {

        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
        expect(result[4]).toBe(5);

    });

});
