import isNumber from "./isNumber";

function isNegative(num: unknown) {
  return isNumber(num) && num < 0;
}

export default isNegative;
