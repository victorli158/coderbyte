function runLength(str) { 
  let chars = str.split('');
  let compressed = '';
  let count = 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[i + 1]) {
      compressed += count.toString() + chars[i];
      count = 1;
    } else {
      count += 1;
    }
  }
  return compressed;
}
