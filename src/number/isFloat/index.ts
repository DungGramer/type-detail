import { FLOAT_MAX, FLOAT_MIN } from "../constant";
import isNumber from "../isNumber";

function isFloat(num: unknown) {
  return isNumber(num) && num >= FLOAT_MIN && num <= FLOAT_MAX;
}

export default isFloat;
