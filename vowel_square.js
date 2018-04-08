function vowelSquare(strArr) { 
  let vowels = 'aeiou'.split('');
  for (let i = 0; i < strArr.length - 1; i++) {
    for (let j = 0; j < strArr[i].length - 1; j++) {
      if (vowels.includes(strArr[i][j])) {
        if (vowels.includes(strArr[i][j + 1]) && vowels.includes(strArr[i + 1][j]) && vowels.includes(strArr[i + 1][j + 1])) {
            return i.toString() + '-' + j.toString();
        }
      }
    }
  }
  return 'not found';
}
