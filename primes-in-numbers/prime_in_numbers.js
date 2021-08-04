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


const primeInNumbers =  (input) => {

  if (input <= 1) {return null;}

  if (isPrime(input)) {return `(${input})`}

  else {return "(2**2)"}
  

}

exports.primeInNumbers = primeInNumbers;
