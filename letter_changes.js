function letterChanges(str) { 
  let vowels = 'aeiou'.split('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let characters = str.split('');
  for (let i = 0; i < characters.length; i++) {
    if (alphabet.includes(characters[i])) {
      characters[i] = alphabet[alphabet.indexOf(characters[i]) + 1];
    }
    if (vowels.includes(characters[i])) {
      characters[i] = characters[i].toUpperCase();
    }
  }
  return characters.join('');
}