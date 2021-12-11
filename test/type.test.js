const type = require('../dist/type').default;

describe('typeof', () => {
  test('should integer', () => {
    expect(type(1)).toBe('integer');
  });

  test('should float', () => {
    expect(type(1.1)).toBe('float');
  });

  test('should string', () => {
    expect(type('1')).toBe('string');
  });

  test('should boolean', () => {
    expect(type(true)).toBe('boolean');
  });

  test('should array', () => {
    expect(type([])).toBe('array');
  });

  test('should object', () => {
    expect(type({})).toBe('object');
  });

  test('should null', () => {
    expect(type(null)).toBe('null');
  });

  test('should undefined', () => {
    expect(type(undefined)).toBe('undefined');
  });

  test('should function', () => {
    expect(type(() => {})).toBe('function');
  });

  test('should NaN', () => {
    expect(type(NaN)).toBe('NaN');
  });

  test('should Infinity', () => {
    expect(type(Infinity)).toBe('infinity');
  });

  test('should -Infinity', () => {
    expect(type(-Infinity)).toBe('infinity');
  });

  test('should date', () => {
    expect(type(new Date())).toBe('date');
  });

  test('should regexp', () => {
    expect(type(/a/)).toBe('regExp');
  });

  test('should error', () => {
    expect(type(new Error())).toBe('error');
  });

  test('should map', () => {
    expect(type(new Map())).toBe('map');
  });

  test('should set', () => {
    expect(type(new Set())).toBe('set');
  });

  test('should weakmap', () => {
    expect(type(new WeakMap())).toBe('weakMap');
  });

  test('should weakset', () => {
    expect(type(new WeakSet())).toBe('weakSet');
  });

  test('should promise', () => {
    expect(type(new Promise(() => {}))).toBe('promise');
  });

  test('should generator', () => {
    expect(type(function* () {})).toBe('generator');
  });
  
  test('should async function', () => {
    expect(type(async function () {})).toBe('promise');
  });

  test('should arraybuffer', () => {
    expect(type(new ArrayBuffer())).toBe('arrayBuffer');
  });

  test('should dataview', () => {
    expect(type(new DataView(new ArrayBuffer()))).toBe('dataView');
  });

  test('should uint8Array', () => {
    expect(type(new Uint8Array())).toBe('uint8Array');
  });

  test('should uint8clampedArray', () => {
    expect(type(new Uint8ClampedArray())).toBe('uint8ClampedArray');
  });

  test('should int8Array', () => {
    expect(type(new Int8Array())).toBe('int8Array');
  });

  test('should uint16Array', () => {
    expect(type(new Uint16Array())).toBe('uint16Array');
  });

  test('should int16Array', () => {
    expect(type(new Int16Array())).toBe('int16Array');
  });

  test('should uint32Array', () => {
    expect(type(new Uint32Array())).toBe('uint32Array');
  });

  test('should int32Array', () => {
    expect(type(new Int32Array())).toBe('int32Array');
  });

  test('should float32Array', () => {
    expect(type(new Float32Array())).toBe('float32Array');
  });

  test('should float64Array', () => {
    expect(type(new Float64Array())).toBe('float64Array');
  });

  test('should bigInt64Array', () => {
    expect(type(new BigInt64Array())).toBe('bigInt64Array');
  });

  test('should bigUint64Array', () => {
    expect(type(new BigUint64Array())).toBe('bigUint64Array');
  });

  test('should symbol', () => {
    expect(type(Symbol('a'))).toBe('symbol');
  });

  // test('should DOM', () => {
  //   expect(type(document.createElement('div'))).toBe('dom');
  // });

})
