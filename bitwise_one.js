function bitwiseOne(strArr) {
  let firstStr = strArr[0];
  let secondStr = strArr[1];
  let newStr = '';
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === '1' || secondStr[i] === '1') {
      newStr += '1';
    } else {
      newStr += '0';
    }
  }
  return newStr;
}
