function arrayAddition(arr) { 
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  for (let i = 0; i < arr.length; i++) {
    let runningSum = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (j === i) { continue; }
      runningSum += arr[j];
      if (runningSum === max) {
        return true;
      }
    }
  }
  return false;
}
