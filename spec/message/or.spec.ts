import Or from '../../dist/message/or';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


let messages = [
    {message:'a'},
    {message:'b'},
    {message:'c'},
    {message:'d'},
    {message:'e'},
];

let join = Or(messages);
it('check data', ()=>{

   expect(join.messages[0].message).toBe('a');
   expect(join.messages[1].message).toBe('b');
   expect(join.messages[2].message).toBe('c');
   expect(join.messages[3].message).toBe('d');
   expect(join.messages[4].message).toBe('e');
   expect(join.messages[5]).toBeUndefined();

});


it('check message', ()=>{

   expect(join.message).toBe('a or b or c or d or e');

});


it('add value', ()=>{

   join.messages.push({message:'f'});
   expect(join.message).toBe('a or b or c or d or e or f');

});

