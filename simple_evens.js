function simpleEvens(num) { 
  let digits = num.toString().split('');
  let odds = '13579'.split('');
  for (let i = 0; i < digits.length; i++) {
    if (odds.includes(digits[i])) {
      return false;
    }
  }
  return true;
}
