import { DOUBLE_MAX } from "./constant";
import isNumber from "./isNumber";

function isLongDouble(num: number) {
  return isNumber(num) && (num > DOUBLE_MAX || num < -DOUBLE_MAX);
}

export default isLongDouble;
