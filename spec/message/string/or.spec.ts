import Or from '../../../dist/message/string/or.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const messages = [
    {message:'a'},
    {message:'b'},
    {message:'c'},
    {message:'d'},
    {message:'e'},
];

it('check message', ()=>{

   expect(Or(messages)).toBe('a or b or c or d or e');

});


it('add value', ()=>{

    messages.push({message:'f'});
   expect(Or(messages)).toBe('a or b or c or d or e or f');

});

