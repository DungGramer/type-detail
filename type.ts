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

function typeDetail(val: any): string {
  if (val === null) {
    return 'null';
  }

  try {
    switch (typeof val) {
      case 'number':
        if (isNaN(val)) {
          return 'NaN';
        }
        if (!isFinite(val)) {
          return 'infinity';
        }
        return isInteger(val);

      case 'function':
        if (isClass(val)) {
          return 'class';
        }
        return 'function';

      case 'object':
        switch (true) {
          case Array.isArray(val) || val instanceof Array:
            return 'array';
          case val instanceof Function:
            return 'function';
          case val instanceof Date:
            return 'date';
          case val instanceof RegExp:
            return 'regExp';
          case val instanceof Error:
            return 'error';
          case val instanceof Map:
            return 'map';
          case val instanceof Set:
            return 'set';
          case val instanceof WeakMap:
            return 'weakMap';
          case val instanceof WeakSet:
            return 'weakSet';
          case val instanceof Promise:
            return 'promise';
          case val instanceof ArrayBuffer:
            return 'arrayBuffer';
          case val instanceof Int8Array:
            return 'int8Array';
          case val instanceof Uint8Array:
            return 'uint8Array';
          case val instanceof Uint8ClampedArray:
            return 'uint8ClampedArray';
          case val instanceof Int16Array:
            return 'int16Array';
          case val instanceof Uint16Array:
            return 'uint16Array';
          case val instanceof Int32Array:
            return 'int32Array';
          case val instanceof Uint32Array:
            return 'uint32Array';
          case val instanceof Float32Array:
            return 'float32Array';
          case val instanceof Float64Array:
            return 'float64Array';
          case val instanceof BigInt64Array:
            return 'bigInt64Array';
          case val instanceof BigUint64Array:
            return 'bigUint64Array';
          case val instanceof DataView:
            return 'dataView';
          default:
            return 'object';
        }

      default:
        return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
    }
  } catch (e) {
    return 'unknown';
  }
}

export default typeDetail;
