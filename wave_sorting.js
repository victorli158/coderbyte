function waveSorting(arr) { 
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]]++;
    } else {
      counts[arr[i]] = 1;
    }
  }
  for (var key in counts) {
    if (counts[key] > arr.length / 2) {
      return false;
    }
  }
  return true;
}
