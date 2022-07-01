import {MapCallbackParameters} from '../../../dist/validatable/map-callback';
import {MapParameters} from '../../../dist/validator/validatable/list/map';
import {MapPartialParameters} from '../../../dist/validator/validatable/list/map-partial';
import {AndParameters} from '../../../dist/validatable/and';
import Validatable from '@alirya/validatable/validatable';
import ValidatorInterface from '@alirya/validator/simple';
import ValueInterface from '@alirya/value/value';
import Message from '@alirya/message/message';
import MessageMap from '../../../dist/message/message/list/map';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('explicit typed', function() {

    type TypeValidator = [
        ValidatorInterface<any, string, Instance<any, string>>,
        ValidatorInterface<any, string, Instance<any, string>>,
    ];

    type Type = [
        string,
        string,
    ];

    let validator : TypeValidator = [
        TypeParameters('string'),
        TypeParameters('string'),
    ];

    let value : Type = [
        'name',
        'address',
    ];

    describe('auto', function() {

        let validatable = new MapCallbackParameters(value, validator,
            (value, validators) => MapParameters(value, validators),
            AndParameters,
            (v)=>MessageMap(v)
        );

        let unknown : unknown = validatable.value;

        let record : Type = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        // @ts-expect-error
        instance = validatable.validatables[3];
        // @ts-expect-error
        instance = validatable.validatables[4];
    });

    describe('auto partial', function() {

        let validatable = new MapCallbackParameters(value, validator,
            (value, validators) =>
                <(Validatable & ValueInterface & Message<string>)[]>MapPartialParameters(value, validators),
            AndParameters,
            (v)=>MessageMap(v)
        );

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        instance = validatable.validatables[3];
        instance = validatable.validatables[4];
    });
});


describe('explicit typed', function() {

    let validator  = [
        TypeParameters('string'),
        TypeParameters('string'),
    ];

    let value  = [
        'name',
        'address',
    ];


    describe('auto', function() {

        let validatable = new MapCallbackParameters(value, validator,
            (value, validators) => MapParameters(value, validators),
            AndParameters, (v)=>MessageMap(v)
        );

        let unknown : unknown = validatable.value;

        let value1 : string[] = validatable.value;

        // @ts-expect-error
        let value2 : [string, string] = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        instance = validatable.validatables[3];
        instance = validatable.validatables[4];
    });

    describe('auto partial', function() {

        let validatable = new MapCallbackParameters(value, validator,
            (value, validators) =>
                <(Validatable & ValueInterface & Message<string>)[]>MapPartialParameters(value, validators),
            AndParameters, (v)=>MessageMap(v)
        );

        let unknown : unknown = validatable.value;

        let value1 : string[] = validatable.value;

        // @ts-expect-error
        let value2 : [string, string] = validatable.value;

        let instance : Validatable;
        instance = validatable.validatables[0];
        instance = validatable.validatables[1];
        instance = validatable.validatables[3];
        instance = validatable.validatables[4];
    });
});


