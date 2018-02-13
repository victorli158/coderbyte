function vowelCount(str) { 
  let vowels = 'aeiou'.split('');
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}
