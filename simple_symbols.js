function simpleSymbols(str) { 
  let chars = str.split('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < chars.length; i++) {
    if (alphabet.includes(chars[i])) {
      if (!chars[i - 1] || !chars[i + 1]) {
        return false;
      } else if (chars[i - 1] !== '+' || chars[i + 1] !== '+') {
        return false;
      }
    }
  }
  return true;
}
