import isNumber from "./isNumber";

function isPositive(num: unknown): boolean {
  return isNumber(num) && num > 0
}

export default isPositive;