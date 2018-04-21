function sumMultiplier(arr) { 
  let sorted = arr.sort(function(a, b) { return b - a; });
  let product = arr[0] * arr[1];
  let sum = arr.reduce(function(acc, el) {
      return acc + el;
  });
  return product > sum * 2 ? true : false;
}
