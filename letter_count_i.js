function letterCountI(str) {
  let words = str.split(' ');
  let greatestRepeats = 0;
  let greatestWord = '';
  let currentCounts;
  let greatestCurrentCount;
  for (let i = 0; i < words.length; i++) {
    greatestCurrentCount = 0;
    currentCounts = {};
    for (let j = 0; j < words[i].length; j++) {
      if (currentCounts[words[i][j]]) {
        currentCounts[words[i][j]] += 1;
      } else {
        currentCounts[words[i][j]] = 1;
      }
    }
    for (var key in currentCounts) {
      if (currentCounts[key] > greatestCurrentCount) {
        greatestCurrentCount = currentCounts[key];
      }
    }
    if (greatestCurrentCount > greatestRepeats) {
      greatestRepeats = greatestCurrentCount;
      greatestWord = words[i];
    }
  }
  if (greatestRepeats > 1) {
    return greatestWord;
  } else {
    return -1;
  }
}
