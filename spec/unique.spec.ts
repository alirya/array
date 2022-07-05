import {UniqueParameters} from '../dist/unique.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('single string', function() {

    const array : string[] = [
        'a','b',
        'b','a',
    ];
    const removed = UniqueParameters(array);
    it('remove duplicate', () => expect(removed).toEqual(['a','b']));

});

describe('single string custom', function() {

    const array : string[] = [
        'A','B',
        'b','a',
    ];
    const removed = UniqueParameters(array, (v1, v2)=>v1.toLowerCase() === v2.toLowerCase());
    it('remove duplicate', () => expect(removed).toEqual(['A','B']));

});

describe('single number', function() {

    const array : number[] = [
        1,2,
        1,2,
    ];
    const removed = UniqueParameters(array);
    it('remove duplicate', () => expect(removed).toEqual([1,2]));

});


describe('multiple number', function() {

    const array : number[] = [
        1,2,3,
        1,2,3,
        1,2,
          2,3,4,
          2,3
    ];

    const removed = UniqueParameters(array);
    it('remove duplicate', () => expect(removed).toEqual([1,2,3,4]));

});

describe('multiple number with hole', function() {

    const array : number[] = [
        1,2,3,    6,
        1,2,3, // removed by "delete"
        1,2,    5,
          2,3,4,
        2,3, // removed by "delete"
        2
    ];

    delete array[1];
    delete array[4];

    const removed = UniqueParameters(array);

    it('remove duplicate', () => expect(removed).toEqual([1,3,6,2,5,4]));

});

describe('multiple object custom', function() {

    interface Data {
        data : number;
        id : number;
    }

    const array : Data[] = [
        {data:1, id:1}, {data:2, id:2},   {data:3, id:3},                                   {data:6, id:4},
        {data:1, id:5}, {data:2, id:6},   {data:3, id:7}, // removed by "delete"
        {data:1, id:8}, {data:2, id:9},                                    {data: 5, id:10},
                        {data:2, id:11},  {data:3, id:12}, {data:4, id:13},
                        {data:2, id:14},  {data:3, id:15}, // removed by "delete"
                        {data:2, id:16}
    ];

    const result = [
        { data: 1, id: 1 },
        { data: 2, id: 2 },
        { data: 3, id: 3 },
        { data: 6, id: 4 },
        { data: 5, id: 10 },
        { data: 4, id: 13 }
    ];

    const removed = UniqueParameters(array, (v1, v2)=>v1.data === v2.data);

    for(const [index, value] of removed.entries()) {

        it('remove duplicate', () => {
            expect(value.data).toEqual(result[index].data);
            expect(value.id).toEqual(result[index].id);
        });
    }

});



describe('multiple object custom with hole', function() {

    interface Data {
        data : number;
        id : number;
    }

    const array : Data[] = [
        {data:1, id:1}, {data:2, id:2},   {data:3, id:3},                                   {data:6, id:4},
        {data:1, id:5}, {data:2, id:6},   {data:3, id:7}, // removed by "delete"
        {data:1, id:8}, {data:2, id:9},                                    {data: 5, id:10},
        {data:2, id:11},                  {data:3, id:12}, {data:4, id:13},
        {data:2, id:14},                  {data:3, id:15}, // removed by "delete"
        {data:2, id:16}
    ];

    const result = [
        { data: 1, id: 1 },
        { data: 3, id: 3 },
        { data: 6, id: 4 },
        { data: 2, id: 6 },
        { data: 5, id: 10 },
        { data: 4, id: 13 }
    ];

    delete array[1];
    delete array[4];

    const removed = UniqueParameters(array, (v1, v2)=>v1.data === v2.data);

    for(const [index, value] of removed.entries()) {

        it('remove duplicate', () => {
            expect(value.data).toEqual(result[index].data);
            expect(value.id).toEqual(result[index].id);
        });
    }

});
