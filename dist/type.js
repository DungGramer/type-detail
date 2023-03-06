"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeValue = exports.typeObject = void 0;
exports.typeObject = {
    function: "function",
    date: "date",
    regExp: "regExp",
    error: "error",
    map: "map",
    set: "set",
    weakMap: "weakMap",
    weakSet: "weakSet",
    promise: "promise",
    arrayBuffer: "arrayBuffer",
    int8Array: "int8Array",
    uint8Array: "uint8Array",
    uint8ClampedArray: "uint8ClampedArray",
    int16Array: "int16Array",
    uint16Array: "uint16Array",
    int32Array: "int32Array",
    uint32Array: "uint32Array",
    float32Array: "float32Array",
    float64Array: "float64Array",
    bigInt64Array: "bigInt64Array",
    bigUint64Array: "bigUint64Array",
    dataView: "dataView",
    blob: "blob",
};
exports.TypeValue = __assign(__assign({ null: "null", undefined: "undefined", NaN: "NaN", infinity: "infinity", integer: "integer", float: "float", string: "string", class: "class", generator: "generator" }, exports.typeObject), { unknown: "unknown" });
