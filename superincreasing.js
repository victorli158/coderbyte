function superincreasing(arr) {
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= currentSum) {
      return false;
    }
    currentSum += arr[i];
  }
  return true;
}
