import {RandomParameters} from '../dist/random.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


const array : number[] = [1, 2, 3, 4, 5, 6];
const random = RandomParameters(array);

for (const value of random) {

    it('check exist', () => expect(array.includes(value)).toBeTrue());
}
