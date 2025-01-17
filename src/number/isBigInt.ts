/**
 * @example
 * isBigInt(2n) //=> true
 * isBigInt(Bigint(3)) //=> true
 * isBigInt('3') //=> false
 */
function isBigInt(num: unknown): num is bigint {
  return typeof num === 'bigint'
}

export default isBigInt;