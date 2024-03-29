export const typeObject = {
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

export const TypeValue = {
  null: "null",
  undefined: "undefined",
  NaN: "NaN",
  infinity: "infinity",
  integer: "integer",
  float: "float",
  string: "string",
  class: "class",
  generator: "generator",
  ...typeObject,
  unknown: "unknown",
};
