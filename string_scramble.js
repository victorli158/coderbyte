function stringScramble(str1,str2) { 
  let oneChars = str1.split('');
  let twoChars = str2.split('');
  let currentIdx;
  for (let i = 0; i < twoChars.length; i++) {
    if (!oneChars.includes(twoChars[i])) {
      return false;
    } else {
      currentIdx = oneChars.indexOf(twoChars[i]);
      oneChars.splice(currentIdx, 1);
    }
  }
  return true;
}
