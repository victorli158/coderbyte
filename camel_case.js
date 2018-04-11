function camelCase(str) { 
  let chars = str.split('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  chars[0] = chars[0].toLowerCase();
  let counter = 1;
  while (counter < chars.length) {
    if (!alphabet.includes(chars[counter])) {
      chars.splice(counter, 1);
      chars[counter] = chars[counter].toUpperCase();
    } else {
      chars[counter] = chars[counter].toLowerCase();
    }
    counter += 1;
  }
  return chars.join('');
}
