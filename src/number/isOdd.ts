import isNumber from "./isNumber";

function isOdd(num: unknown) {
  return isNumber(num) && num % 2 !== 0;
}

export default isOdd;
