function dashInsert(str) { 
  let chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    if (parseInt(chars[i]) % 2 === 1 && parseInt(chars[i + 1]) % 2 === 1) {
      chars.splice(i + 1, 0, '-');
    }
  }
  return chars.join('');
}
