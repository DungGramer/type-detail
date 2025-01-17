import { DOUBLE_MAX, FLOAT_MAX } from "./constant";
import isNumber from "./isNumber";

function isDouble(num: number) {
  return isNumber(num) && num > FLOAT_MAX && num <= DOUBLE_MAX;
}

export default isDouble;