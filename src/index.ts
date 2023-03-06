import { TypeValue, typeObject } from "./type";

function defineFunction(func: Function, regex: RegExp): boolean {
  return (
    typeof func === "function" &&
    regex.test(Function.prototype.toString.call(func))
  );
}

function isInteger(
  value: any
): typeof TypeValue.integer | typeof TypeValue.float {
  return Number.isInteger(value) ? TypeValue.integer : TypeValue.float;
}

function typeDetail(operand: any): string {
  if (operand === null) {
    return TypeValue.null;
  }

  if (operand === undefined) {
    return TypeValue.undefined;
  }

  try {
    switch (typeof operand) {
      case "number": {
        if (isNaN(operand)) {
          return TypeValue.NaN;
        }
        if (!isFinite(operand)) {
          return TypeValue.infinity;
        }
        return isInteger(operand);
      }

      case "string": {
        return TypeValue.string;
      }

      case "function": {
        if (defineFunction(operand, /^class\s/)) {
          return TypeValue.class;
        }
        if (defineFunction(operand, /^async\s/)) {
          return TypeValue.promise;
        }
        if (defineFunction(operand, /function\*\s|\*\w+\s/)) {
          return TypeValue.generator;
        }
        return TypeValue.function;
      }

      case "object": {
        for (const [key, value] of Object.entries(typeObject)) {
          if (
            operand instanceof
            (globalThis as any)[key.charAt(0).toUpperCase() + key.slice(1)]
          ) {
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
  } catch (e) {
    return TypeValue.unknown;
  }
}

export default typeDetail;
