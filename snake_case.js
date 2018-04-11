function snakeCase(str) { 
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    if (alphabet.includes(chars[i])) {
      chars[i] = chars[i].toLowerCase();
    } else {
      chars[i] = '_';
    }
  }
  return chars.join('');
}
