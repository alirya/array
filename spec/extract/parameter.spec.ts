import RemoveParameter from "../../dist/extract-parameter";
import RemoveParameters from "../../dist/extract-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("default", () => {

    let parameters : number[] = [1,2,3,1,5];
    let parameter : number[] = [1,2,3,1,5];

    expect(
        RemoveParameters(parameters, v=>v===1)
    ).toEqual(
        RemoveParameter({array:parameter, validation: v=>v === 1})
    );

    expect(parameters).toEqual(parameter);
});


it("with start", () => {

    let parameters : number[] = [1,2,3,1,5];
    let parameter : number[] = [1,2,3,1,5];

    expect(
        RemoveParameters(parameters, v=>v===1, 1)
    ).toEqual(
        RemoveParameter({
            array : parameter,
            validation: v=>v === 1,
            start: 1
        })
    );

    expect(parameters).toEqual(parameter);
});

it("with start, end", () => {

    let parameters : number[] = [1,2,3,1,5,1,1];
    let parameter : number[] = [1,2,3,1,5,1,1];

    expect(
        RemoveParameters(parameters, v=>v===1, 1, 2)
    ).toEqual(
        RemoveParameter({
            array : parameter,
            validation: v=>v === 1,
            start: 1,
            end: 2
        })
    );

    expect(parameters).toEqual(parameter);
});

it("with start, end, limit", () => {

    let parameters : number[] = [1,2,3,1,5,1,1];
    let parameter : number[] = [1,2,3,1,5,1,1];

    expect(
        RemoveParameters(parameters, v=>v===1, 1, 5, 2)
    ).toEqual(
        RemoveParameter({
            array : parameter,
            validation: v=>v === 1,
            start: 1,
            end: 5,
            limit: 2
        })
    );

    expect(parameters).toEqual(parameter);
});

