const isPrime = (number) => {
  for (let i = 2; i < number; i++) if (number % i === 0) return false;
  return number > 1;
};

const printPrimeSum = () => {
  let pattern = "";
  let primeSum = 0;
  const N = 100;

  for (let i = 1; i <= N; i++) {
    if (isPrime(i) === true) {
      pattern += ` ${i} +`;
      primeSum += i;
    }
  }

  console.log(pattern.slice(0, -1));
  console.log(`PRIME SUM : ${primeSum}`);
};

printPrimeSum();
