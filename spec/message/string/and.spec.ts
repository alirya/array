import And from '../../../dist/message/string/and';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let messages = [
    {message:'a'},
    {message:'b'},
    {message:'c'},
    {message:'d'},
    {message:'e'},
];

it('check message', ()=>{

   expect(And(messages)).toBe('a and b and c and d and e');

});

it('add value', ()=>{

    messages.push({message:'f'});
   expect(And(messages)).toBe('a and b and c and d and e and f');

});

