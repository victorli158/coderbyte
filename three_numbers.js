function threeNumbers(str) { 
  let words = str.split(' ');
  let digits = '123456789'.split('');
  let count;
  let idxes = [];
  let nums = [];
  for (let i = 0; i < words.length; i++) {
    count = 0;
    idxes = [];
    nums = [];
    for (let j = 0; j < words[i].length; j++) {
      if (digits.includes(words[i][j]) && !nums.includes(words[i][j])) {
        count += 1;
        idxes.push(j);
        nums.push(words[i][j]);
      }
    }
    if (count === 3) {
      if ((idxes[0] + 1) !== idxes[1] && (idxes[0] + 2) !== idxes[2]) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}