function nonrepeatingCharacter(str) { 
  let current;
  let valid;
  let seen = [];
  for (let i = 0; i < str.length; i++) {
    current = str[i];
    valid = true;
    for (let j = i + 1; j < str.length; j++) {
      if (current === str[j] || seen.includes(str[i])) {
        valid = false;
        seen.push(str[i]);
        break;
      }
    }
    if (valid) {
      return current;
    }
  }
}
