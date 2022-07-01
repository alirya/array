import {RemoveIndexParameters} from '../../dist/boolean/remove-index';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('remove valid', function() {

    let target : number[] = [1,2,3,4,5];
    let result = RemoveIndexParameters(target, 2);
    it('compare result', () => {expect(result).toBeTrue();});
    it('compare array', () => {expect(target).toEqual([1,2,4,5]);});

});

describe('remove single valid', function() {

    let target : number[] = [1];
    let result = RemoveIndexParameters(target, 0);
    it('compare result', () => {expect(result).toBeTrue();});
    it('compare array', () => {expect(target).toEqual([]);});

});

describe('remove invalid', function() {

    let target : number[] = [1,2,3,4,5];
    let result = RemoveIndexParameters(target, 8);
    it('compare result', () => {expect(result).toBeFalse();});
    it('compare array', () => {expect(target).toEqual([1,2,3,4,5]);});

});

describe('remove empty invalid', function() {

    let target : number[] = [];
    let result = RemoveIndexParameters(target, 8);
    it('compare result', () => {expect(result).toBeFalse();});
    it('compare array', () => {expect(target).toEqual([]);});

});
