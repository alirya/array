import {ExtractParameters} from '../../dist/extract';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('exists', function() {

    let array : any[] = [1,'a','b',2,'c'];
    let result = ExtractParameters(array, v => typeof v === 'string');

    it('result', () => expect(['a','b','c']).toEqual(result));
    it('original', () => expect([1,2]).toEqual(array));
});


describe('start', function() {

    let array : any[] = [1,'a','b',2,'c',3,'d'];
    let result = ExtractParameters(array, v => typeof v === 'string', 2);

    it('result', () => expect(['b','c','d']).toEqual(result));
    it('original', () => expect([1, 'a', 2, 3]).toEqual(array));
});

describe('end', function() {

    let array : any[] = [1,'a','b',2,'c',3,'d'];
    let result = ExtractParameters(array, v => typeof v === 'string', undefined, 4);

    it('result', () => expect(['a','b','c']).toEqual(result));
    it('original', () => expect([1, 2, 3, 'd']).toEqual(array));
});

describe('limit', function() {

    let array : any[] = [1,'a','b',2,'c',3,'d'];
    let result = ExtractParameters(array, v => typeof v === 'string', undefined, undefined, 1);

    it('result', () => expect(['a']).toEqual(result));
    it('original', () => expect([1,'b',2,'c',3,'d']).toEqual(array));
});
