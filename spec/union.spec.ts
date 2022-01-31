import Union from '../dist/union';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    it('native', function() {

        let merged : Union<[Array<any>, Map<any, any>]> = Object.assign([], new Map());

        let map : Map<any, any> = merged;
        let array : any[] = merged;

    });

    it('native', function() {

        class A {
            public a : string = '';
        }

        class B {
            public b : string = '';
        }

        let merged : Union<[A, B]> = {a:'', b:''};

        let a : A = merged;
        let b : B = merged;

        // @ts-expect-error
        merged = {a:''};
        // @ts-expect-error
        merged = {b:''};
    });

});
