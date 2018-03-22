function binaryConverter(str) { 
  let digits = str.split('').reverse();
  let sum = 0;
  let counter = 0;
  let digit = 1;
  while (counter < digits.length) {
    sum += digit * parseInt(digits[counter]);
    digit = digit * 2;
    counter += 1;
  }
  return sum;
}
