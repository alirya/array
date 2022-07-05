import And from '../../dist/message/and.js';
import {List} from 'ts-toolbelt';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


const messages = [
    {message:'a'},
    {message:'b'},
    {message:'c'},
    {message:'d'},
    {message:'e'},
];


it('check data', ()=>{

    const join = And(messages);
   expect(join.messages[0].message).toBe('a');
   expect(join.messages[1].message).toBe('b');
   expect(join.messages[2].message).toBe('c');
   expect(join.messages[3].message).toBe('d');
   expect(join.messages[4].message).toBe('e');
   expect(join.messages[5]).toBeUndefined();

});


it('check message', ()=>{

    const join = And(messages);
   expect(join.message).toBe('a and b and c and d and e');

});


it('add value', ()=>{

    const join = And(messages);
    join.messages.push({message:'f'});
   expect(join.message).toBe('a and b and c and d and e and f');

});


it('paprtial', ()=>{

    delete messages[1];
    delete messages[4];
    delete messages[5];

    const partial : List.Partial<typeof messages> = messages;

    // @ts-expect-error
    const join = And(partial);

   expect(join.message).toBe('a and c and d');

});

