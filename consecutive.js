function consecutive(arr) { 
  arr.sort(function(a,b) { return a - b });
  let counter = 0;
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      counter += 1;
    }
  }
  return counter;
}
