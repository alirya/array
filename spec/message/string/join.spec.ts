import Join from "../../../dist/message/string/join-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


let messages = [
    {message:'a'},
    {message:'b'},
    {message:'c'},
    {message:'d'},
    {message:'e'},
];

it('check message', ()=>{

   expect(Join(messages, ',')).toBe('a,b,c,d,e')

});

it('change delimiter', ()=>{

   expect(Join(messages, '|')).toBe('a|b|c|d|e')

});


it('add value', ()=>{

    messages.push({message:'f'});
   expect(Join(messages, '|')).toBe('a|b|c|d|e|f')

});

