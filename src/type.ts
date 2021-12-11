function isClass(func: Function): boolean {
  return (
    typeof func === 'function' &&
    /^class\s/.test(Function.prototype.toString.call(func))
  );
}

function isInteger(value: any): string {
  if (
    typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value
  ) {
    return 'integer';
  }

  return 'float';
}

function typeDetail(operand: any): string {
  if (operand === null) {
    return 'null';
  }

  try {
    switch (typeof operand) {
      case 'number':
        if (isNaN(operand)) {
          return 'NaN';
        }
        if (!isFinite(operand)) {
          return 'infinity';
        }
        return isInteger(operand);

      case 'function':
        if (isClass(operand)) {
          return 'class';
        }
        return 'function';

      case 'object':
        switch (true) {
          case Array.isArray(operand) || operand instanceof Array:
            return 'array';
          case operand instanceof Function:
            return 'function';
          case operand instanceof Date:
            return 'date';
          case operand instanceof RegExp:
            return 'regExp';
          case operand instanceof Error:
            return 'error';
          case operand instanceof Map:
            return 'map';
          case operand instanceof Set:
            return 'set';
          case operand instanceof WeakMap:
            return 'weakMap';
          case operand instanceof WeakSet:
            return 'weakSet';
          case operand instanceof Promise:
            return 'promise';
          case operand instanceof ArrayBuffer:
            return 'arrayBuffer';
          case operand instanceof Int8Array:
            return 'int8Array';
          case operand instanceof Uint8Array:
            return 'uint8Array';
          case operand instanceof Uint8ClampedArray:
            return 'uint8ClampedArray';
          case operand instanceof Int16Array:
            return 'int16Array';
          case operand instanceof Uint16Array:
            return 'uint16Array';
          case operand instanceof Int32Array:
            return 'int32Array';
          case operand instanceof Uint32Array:
            return 'uint32Array';
          case operand instanceof Float32Array:
            return 'float32Array';
          case operand instanceof Float64Array:
            return 'float64Array';
          case operand instanceof BigInt64Array:
            return 'bigInt64Array';
          case operand instanceof BigUint64Array:
            return 'bigUint64Array';
          case operand instanceof DataView:
            return 'dataView';
          default:
            return 'object';
        }

      default:
        return Object.prototype.toString.call(operand).slice(8, -1).toLowerCase();
    }
  } catch (e) {
    return 'unknown';
  }
}

export default typeDetail;
