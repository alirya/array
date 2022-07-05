import {JoinParameters} from '../../../dist/message/string/join.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


const messages = [
    {message:'a'},
    {message:'b'},
    {message:'c'},
    {message:'d'},
    {message:'e'},
];

it('check message', ()=>{

   expect(JoinParameters(messages, ',')).toBe('a,b,c,d,e');

});

it('change delimiter', ()=>{

   expect(JoinParameters(messages, '|')).toBe('a|b|c|d|e');

});


it('add value', ()=>{

    messages.push({message:'f'});
   expect(JoinParameters(messages, '|')).toBe('a|b|c|d|e|f');

});

