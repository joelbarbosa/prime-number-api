/**
 * check if is prime number
 * @param {Number} n
 * @param {Number} i default divisor is 2
 */
export const isPrime = (n, i = 2) => {
  if (n <= 2) return n === 2 ? true : false;
  if (n % i === 0) return false;
  if (i * i > n) return true;
  return isPrime(n, i + 1);
}

/**
 * find next prime number
 * @param {Number} n
 */
export const findNextPrime = n => {
  const generateNext = next => {
    if(isPrime(next)) {
      return next;
    }
    return generateNext(next + 1);
  }
  return generateNext(n + 1);
}
