const isPrime = (number) => {
  for (let i = 2; i < number; i++) if (number % i === 0) return false;
  return number > 1;
};

const printPrimeSum = () => {
  let pattern = "";
  let primeSum = 0;

  for (let i = 1; i <= 50; i++) {
    if (isPrime(i) === true) {
      pattern += ` ${i} ${i !== 10 ? "+" : ""} `;
      primeSum += i;
    }
  }

  console.log(`PRIME SUM : ${primeSum}`);
};

printPrimeSum();
