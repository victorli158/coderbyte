function longestWord(sen) { 
  let words = sen.split(' ');
  let greatestCount = 0;
  let greatestWord = '';
  let currentCount = 0;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < words.length; i++) {
    currentCount = 0;
    for (let j = 0; j < words[i].length; j++) {
      if (alphabet.includes(words[i][j])) {
        currentCount += 1;
      }
    }
    if (currentCount > greatestCount) {
      greatestWord = words[i];
      greatestCount = currentCount;
    }
  }
  return greatestWord;
}
