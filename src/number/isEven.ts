import isNumber from "./isNumber";

function isEven(num: unknown) {
  return isNumber(num) && num % 2 === 0;
}

export default isEven;
