function ABCheck(str) {
  let chars = str.toLowerCase().split('');
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ' ') {
      chars.splice(i, 1);
    }
  }
  for (let i = 0; i < chars.length; i++) {
    if (chars[i - 3] === 'b' || chars[i + 3] === 'b') {
      return true;
    }
  }
  return false;
}
