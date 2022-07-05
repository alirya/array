import {ExtractParameters, ExtractParameter} from '../../dist/extract.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('default', () => {

    const parameters : number[] = [1,2,3,1,5];
    const parameter : number[] = [1,2,3,1,5];

    expect(
        ExtractParameters(parameters, v=>v===1)
    ).toEqual(
        ExtractParameter({array:parameter, validation: v=>v === 1})
    );

    expect(parameters).toEqual(parameter);
});


it('with start', () => {

    const parameters : number[] = [1,2,3,1,5];
    const parameter : number[] = [1,2,3,1,5];

    expect(
        ExtractParameters(parameters, v=>v===1, 1)
    ).toEqual(
        ExtractParameter({
            array : parameter,
            validation: v=>v === 1,
            start: 1
        })
    );

    expect(parameters).toEqual(parameter);
});

it('with start, end', () => {

    const parameters : number[] = [1,2,3,1,5,1,1];
    const parameter : number[] = [1,2,3,1,5,1,1];

    expect(
        ExtractParameters(parameters, v=>v===1, 1, 2)
    ).toEqual(
        ExtractParameter({
            array : parameter,
            validation: v=>v === 1,
            start: 1,
            end: 2
        })
    );

    expect(parameters).toEqual(parameter);
});

it('with start, end, limit', () => {

    const parameters : number[] = [1,2,3,1,5,1,1];
    const parameter : number[] = [1,2,3,1,5,1,1];

    expect(
        ExtractParameters(parameters, v=>v===1, 1, 5, 2)
    ).toEqual(
        ExtractParameter({
            array : parameter,
            validation: v=>v === 1,
            start: 1,
            end: 5,
            limit: 2
        })
    );

    expect(parameters).toEqual(parameter);
});

