function distinctCharacters(str) {
  let seen = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!seen.includes(str[i])) {
      seen.push(str[i]);
      count += 1;
    }
  }
  return count > 9 ? true : false;
}
