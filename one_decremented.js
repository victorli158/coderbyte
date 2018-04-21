function oneDecremented(num) { 
  let count = 0;
  let digits = num.toString().split('');
  for (let i = 0; i < digits.length - 1; i++) {
    if (parseInt(digits[i]) === parseInt(digits[i + 1]) + 1) {
      count += 1;
    }
  }
  return count;
}
