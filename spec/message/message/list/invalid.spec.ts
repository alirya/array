import ValidatorType from "@dikac/t-type/validator/type-standard";
import ValueAll from "../../../../dist/validator/value-all";
import And from "../../../../dist/validatable/and";
import MessageMapInvalid from "../../../../dist/message/message/list/invalid";
import Value from "../../../../dist/validator/value-all";
import ValidateValue from "../../../../dist/validator/validatable/list/value";
import MapAll from "../../../../dist/validator/map-all";
import Map from "../../../../dist/validator/map-partial";
import Validatable from "@dikac/t-validatable/validatable";
import ValueCallback from "../../../../dist/validator/value-callback";
import MapCallbackFunction from "../../../../dist/validator/map-callback-function";
import Standard from "../../../../dist/validator/validatable/list/map";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('value all', ()=>{

    let validator  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
        ValueAll([
            ValidatorType('string'),
            ValidatorType('string'),
        ], And, MessageMapInvalid)
    ];

    let property = ValueAll(validator, And, MessageMapInvalid);

});

describe('value', ()=>{

    let validator  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
        Value([
            ValidatorType('string'),
            ValidatorType('string'),
        ], And, MessageMapInvalid)
    ];

        let property = Value(validator, And, MessageMapInvalid);

});

describe('value callback', ()=>{

    let validators  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
        ValueCallback([
                ValidatorType('string'),
                ValidatorType('string'),
            ],
            ValidateValue, And, MessageMapInvalid)
    ];

    let validator = ValueCallback(validators, ValidateValue, And, MessageMapInvalid);

});



describe('map all', ()=>{

    let validator = [
        ValidatorType('number'),
        ValidatorType('number'),
        ValidatorType('number'),
        MapAll([
            ValidatorType('number'),
            ValidatorType('number'),
        ], And, MessageMapInvalid)
    ];

    let property = MapAll(validator,And, MessageMapInvalid);

});

describe('map', ()=>{

    let validator = [
        ValidatorType('number'),
        ValidatorType('number'),
        ValidatorType('number'),
        Map([
            ValidatorType('number'),
            ValidatorType('number')
        ],(v)=>And(<Validatable[]>v), MessageMapInvalid)
    ];

    let property = Map(validator, And, MessageMapInvalid);
});

describe('map callback', ()=>{

    let validators = [
        ValidatorType('string'),
        ValidatorType('number'),
        ValidatorType('string'),
        MapCallbackFunction([
            ValidatorType('string'),
            ValidatorType('number'),
        ], Standard, And, MessageMapInvalid)
    ];

    let validator = MapCallbackFunction(validators, Standard, And , MessageMapInvalid);

});
