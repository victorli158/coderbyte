function alphabetSearching(str) { 
  if (str.length < 26) {
    return false;
  }
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let counts = {};
  for (let i = 0; i < alphabet.length; i++) {
    counts[alphabet[i]] = 0;
  }
  for (let j = 0; j < str.length; j++) {
    counts[str[j]] += 1;
  }
  for (var key in counts) {
    if (counts[key] === 0) {
      return false;
    }
  }
  return true;
}
