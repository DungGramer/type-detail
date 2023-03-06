"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("./type");
function defineFunction(func, regex) {
    return (typeof func === "function" &&
        regex.test(Function.prototype.toString.call(func)));
}
function isInteger(value) {
    return Number.isInteger(value) ? type_1.TypeValue.integer : type_1.TypeValue.float;
}
function typeDetail(operand) {
    if (operand === null) {
        return type_1.TypeValue.null;
    }
    if (operand === undefined) {
        return type_1.TypeValue.undefined;
    }
    try {
        switch (typeof operand) {
            case "number": {
                if (isNaN(operand)) {
                    return type_1.TypeValue.NaN;
                }
                if (!isFinite(operand)) {
                    return type_1.TypeValue.infinity;
                }
                return isInteger(operand);
            }
            case "string": {
                return type_1.TypeValue.string;
            }
            case "function": {
                if (defineFunction(operand, /^class\s/)) {
                    return type_1.TypeValue.class;
                }
                if (defineFunction(operand, /^async\s/)) {
                    return type_1.TypeValue.promise;
                }
                if (defineFunction(operand, /function\*\s|\*\w+\s/)) {
                    return type_1.TypeValue.generator;
                }
                return type_1.TypeValue.function;
            }
            case "object": {
                for (var _i = 0, _a = Object.entries(type_1.typeObject); _i < _a.length; _i++) {
                    var _b = _a[_i], key = _b[0], value = _b[1];
                    if (operand instanceof
                        globalThis[key.charAt(0).toUpperCase() + key.slice(1)]) {
                        return value;
                    }
                }
            }
            default:
                return Object.prototype.toString
                    .call(operand)
                    .slice(8, -1)
                    .toLowerCase();
        }
    }
    catch (e) {
        return type_1.TypeValue.unknown;
    }
}
exports.default = typeDetail;
