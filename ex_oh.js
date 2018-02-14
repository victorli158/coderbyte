function exOh(str) { 
  let xCount = 0;
  let oCount = 0;
  let letters = str.split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === 'x') {
      xCount += 1;
    } else {
      oCount += 1;
    }
  }
  return xCount === oCount;
}
