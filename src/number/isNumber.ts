function isNumber(num: unknown): num is number {
  return typeof num === "number" && !Number.isNaN(num) && Number.isFinite(num);
}

export default isNumber;
