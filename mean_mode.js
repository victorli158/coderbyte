function meanMode(arr) { 
  let sum = 0;
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
  }
  let mean = sum / arr.length;
  let highest = 0;
  for (let key in counts) {
    if (counts[key] > highest) {
      highest = key;
    }
  }
  return mean == highest ? 1 : 0;
}
