function numberStream(str) { 
  let targetString;
  for (let i = 0; i < str.length; i++) {
    targetString = '';
    while (targetString.length < parseInt(str[i])) {
      targetString += str[i];
    }
    if (str.slice(i, i + parseInt(str[i])) === targetString) {
      return true;
    }
  }
  return false;
}
