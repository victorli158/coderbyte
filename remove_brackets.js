function removeBrackets(str) { 
  let chars = str.split('');
  let done = false;
  let removeCount;
  while (!done) {
    removeCount = 0;
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === '(' && chars[i + 1] === ')') {
        chars.splice(i, 2);
        removeCount += 2;
      }
    }
    if (removeCount === 0) {
      done = true;
    }
  }
  return chars.length;
}
