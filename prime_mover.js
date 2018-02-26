function primeMover(num) {
  if (num === 1) {
    return 2;
  }
  let primes = [2];
  let counter = 3;
  let factors = [];
  while (primes.length < num) {
    for (let i = 1; i <= counter; i++) {
      if (counter % i === 0) {
        factors.push(i);
      }
    }
    if (factors.length === 2) {
      primes.push(counter);
    }
    factors = [];
    counter += 1;
  }
  return primes[primes.length - 1];
}
