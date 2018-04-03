function elementMerger(arr) { 
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      odds.push(i);
    }
  }
  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = Math.abs(arr[i] - arr[i + 1]);
    }
    arr.splice(arr.length - 1, 1);
  }
  return arr[0];
}
