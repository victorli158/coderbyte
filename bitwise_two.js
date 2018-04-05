function bitwiseTwo(strArr) { 
  let result = '';
  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] === '1' && strArr[1][i] === '1') {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}
