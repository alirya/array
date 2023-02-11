import Empty from '../../dist/validator/empty.js';
import EmptyMessage from '../../dist/validatable/string/empty.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

const map = new Map<unknown[], [boolean, string]>();
map.set([], [true, 'empty array']);
map.set([1], [false, 'not empty array']);
map.set([1,2], [false, 'not empty array']);


for(const [value, [valid, message]] of map) {

    describe('empty', () => {

        it(message, ()=>{

            const validator = Empty.Parameters(EmptyMessage.Parameters);
            const validatable = validator(value);
            expect(validatable.valid).toBe(valid);
            expect(validatable.value).toBe(value);

            if(validatable.valid) {
                expect(validatable.message).toBe(`"Array" is empty array.`);
            } else {
                expect(validatable.message).toBe(`"Array" must empty array.`);
            }
        });

    });

}
