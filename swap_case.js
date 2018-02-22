function swapCase(str) { 
  let chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    if (chars[i].toLowerCase() === chars[i]) {
      chars[i] = chars[i].toUpperCase();
    } else {
      chars[i] = chars[i].toLowerCase();
    }
  }
  return chars.join('');
}
