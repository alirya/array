import Union from '../dist/intersect.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    it('native', function() {

        const merged : Union<[Array<any>, Map<any, any>]> = Object.assign([], new Map());

        const map : Map<any, any> = merged;
        const array : any[] = merged;

    });

    it('native', function() {

        class A {
            public a  = '';
        }

        class B {
            public b  = '';
        }

        let merged : Union<[A, B]> = {a:'', b:''};

        const a : A = merged;
        const b : B = merged;

        // @ts-expect-error
        merged = {a:''};
        // @ts-expect-error
        merged = {b:''};
    });

});
