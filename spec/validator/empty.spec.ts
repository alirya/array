import Empty from "../../dist/validator/empty";
import EmptyMessage from "../../dist/validatable/string/empty";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let map = new Map<unknown[], [boolean, string]>();
map.set([], [true, 'empty array']);
map.set([1], [false, 'not empty array']);
map.set([1,2], [false, 'not empty array']);


for(let [value, [valid, message]] of map) {

    describe('empty', () => {

        it(message, ()=>{

            let validator = Empty(EmptyMessage);
            let validatable = validator(value);
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
