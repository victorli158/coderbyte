function binaryReversal(str) { 
  let binary = [];
  let integer = parseInt(str);
  let digit = 1;
  let binaryDigits = [];
  while (digit < integer) {
    binary.unshift(digit);
    digit = digit * 2;
  }
  for (let i = 0; i < binary.length; i++) {
    if (integer - binary[i] >= 0) {
      integer = integer - binary[i];
      binaryDigits.push('1');
    } else {
      binaryDigits.push('0');
    }
  }
  while (binaryDigits.length % 8 !== 0) {
    binaryDigits.unshift('0');
    binary.unshift(digit);
    digit = digit * 2;
  }
  binaryDigits = binaryDigits.reverse();
  let newNum = 0;
  for (let j = 0; j < binaryDigits.length; j++) {
    newNum += parseInt(binaryDigits[j] * binary[j]);
  }
  return newNum;
}
