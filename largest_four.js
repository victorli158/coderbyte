function largestFour(arr) {
  if (arr.length < 4) {
    return arr.reduce(function(acc, el) {
      return acc + el;
    }, 0);
  }
  arr = arr.sort(function(a, b) { return b - a; });
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    sum += arr[i];
  }
  return sum;
}
