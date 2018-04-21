function stringMerge(str) { 
  let words = str.split('*');
  let merged = '';
  for (let i = 0; i < words[0].length; i++) {
    merged += words[0][i] + words[1][i];
  }
  return merged;
}
