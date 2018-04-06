function threeSum(arr) { 
  let target = arr.shift();
  let difference;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) { continue; }
      difference = arr[i] - arr[j];
      if (arr.includes(difference) && arr[i] + arr[j] + difference === target) {
        return true;
      }
    }
  }
  return false;
}