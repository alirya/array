import Valid from '../../../dist/validatable/list/valid';
import Validatable from '@alirya/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility property', function() {

    describe('explicit', function() {

        let record  = [
            {valid:true},
            {valid:false},
        ];

        let result = Valid(record);

        let validatable : Validatable;

        if(result[0]) {

            validatable = result[0];
        }

        if(result[1]) {

            validatable = result[1];
        }

        if(result[2]) {

            validatable = result[2];
        }
    });


    describe('implicit', function() {

        let record : [
            Validatable,
            Validatable
        ] = [
            {valid:true},
            {valid:false},
        ];

        let result = Valid<[Validatable, Validatable]>(record);

        let validatable : Validatable;

        if(result[0]) {

            validatable = result[0];
        }

        validatable = result[1];

        validatable = result[2];
    });
});



describe('check property', function() {

    let record  = [
        {valid:true},
        {valid:false},
        {valid:true},
        {valid:false},
    ];

    let result = Valid(record);

    it('valid', () => {

        if(result[0]) {

            expect(result[0].valid).toBe(true);

        } else {

            fail('property is not exits');
        }
    });

    it('valid', () => {

        if(result[1]) {

            expect(result[1].valid).toBe(true);

        } else {

            fail('property is not exits');
        }
    });
    it('invalid', () => {

        expect(result[2]).toBeUndefined();
    });


    it('invalid', () => {

        expect(result[3]).toBeUndefined();
    });
});

describe('all false', function() {

    let record  = [
        {valid:false},
        {valid:false},
        {valid:false},
        {valid:false},
        {valid:false},
        {valid:false},
        {valid:false},
        {valid:false},

    ];

    let result = Valid(record);

    it('empty', () => {

        expect(result).toEqual([]);
    });

});
