function dashInsertII(num) { 
  let digits = num.toString().split('');
  let result = '';
  for (let i = 0; i < digits.length - 1; i++) {
    if (parseInt(digits[i]) % 2 === 1 && parseInt(digits[i + 1]) % 2 === 1) {
      result += digits[i];
      result += '-';
    } else if (parseInt(digits[i]) % 2 === 0 && parseInt(digits[i + 1]) % 2 === 0 && parseInt(digits[i]) !== 0 && parseInt(digits[i + 1]) !== 0) {
      result += digits[i];
      result += '*';
    } else {
      result += digits[i];
    }
  }
  result += digits[digits.length - 1];
  return result;
}
