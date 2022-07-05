import {RemoveIndexParameters} from '../../dist/boolean/remove-index.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('remove valid', function() {

    const target : number[] = [1,2,3,4,5];
    const result = RemoveIndexParameters(target, 2);
    it('compare result', () => {expect(result).toBeTrue();});
    it('compare array', () => {expect(target).toEqual([1,2,4,5]);});

});

describe('remove single valid', function() {

    const target : number[] = [1];
    const result = RemoveIndexParameters(target, 0);
    it('compare result', () => {expect(result).toBeTrue();});
    it('compare array', () => {expect(target).toEqual([]);});

});

describe('remove invalid', function() {

    const target : number[] = [1,2,3,4,5];
    const result = RemoveIndexParameters(target, 8);
    it('compare result', () => {expect(result).toBeFalse();});
    it('compare array', () => {expect(target).toEqual([1,2,3,4,5]);});

});

describe('remove empty invalid', function() {

    const target : number[] = [];
    const result = RemoveIndexParameters(target, 8);
    it('compare result', () => {expect(result).toBeFalse();});
    it('compare array', () => {expect(target).toEqual([]);});

});
