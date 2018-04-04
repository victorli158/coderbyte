function nextPalindrome(num) { 
  if (num < 10) {
    return num + 1;
  } else if (num < 100) {
    let result = Math.floor((num / 10) + 1) * 11;
    return result;
  }
  let digits = num.toString().split('');
  let midpoint = Math.floor(digits.length / 2);
  let result = parseInt(digits.slice(0, midpoint) + digits[midpoint] + digits.slice(0, midpoint));
  return result;
}
