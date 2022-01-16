import Random from '../dist/random-parameters';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


let array : number[] = [1, 2, 3, 4, 5, 6];
let random = Random(array);

for (let value of random) {

    it('check exist', () => expect(array.includes(value)).toBeTrue());
}
