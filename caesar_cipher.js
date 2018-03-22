function caesarCipher(str,num) {
  if (num === 0) {
    return str;
  }
  let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split('');
  let capsAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    if (alphabet.includes(chars[i])) {
      chars[i] = alphabet[alphabet.indexOf(chars[i]) + num];
    } else if (capsAlphabet.includes(chars[i])) {
      chars[i] = capsAlphabet[capsAlphabet.indexOf(chars[i]) + num];
    }
  }
  return chars.join('');
}
