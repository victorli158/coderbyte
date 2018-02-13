function letterCapitalize(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split('');
    letters[0] = letters[0].toUpperCase();
    words[i] = letters.join('');
  }
  return words.join(' ');
}
