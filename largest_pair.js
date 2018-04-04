function largestPair(num) {
  let digits = num.toString().split('');
  let greatest = 0;
  for (let i = 0; i < digits.length - 1; i++) {
    if (parseInt(digits[i] + digits[i + 1]) > greatest) {
      greatest = parseInt(digits[i] + digits[i + 1]);
    }
  }
  return greatest;
}
