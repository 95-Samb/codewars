const isPrime = (n) =>
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;
  }
}

const primeFactors =  (input) => {

  largestFactor = input

  primes = []

  while (isPrime(largestFactor) === false) {

    for (var i = 2; i < largestFactor; i++) {
      if (largestFactor % i == 0) {
        primes.push(i);
        largestFactor /= i;
        i = 1
      }
    }
  }

  primes.push(largestFactor)

  return primes;


}


const primeInNumbers =  (input) => {

  if (input <= 1) {return null;}

  if (isPrime(input)) {return `(${input})`}

  else {return "(2**2)"}
  

}

exports.primeInNumbers = primeInNumbers;
exports.primeFactors = primeFactors;
