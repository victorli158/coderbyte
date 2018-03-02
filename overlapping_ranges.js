function overlappingRanges(arr) { 
  let firstRange = [];
  let secondRange = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    firstRange.push(i);
  }
  for (let j = arr[2]; j <= arr[3]; j++) {
    secondRange.push(j);
  }
  let counter = 0;
  for (let k = 0; k < firstRange.length; k++) {
    if (secondRange.includes(firstRange[k])) {
      counter += 1;
      if (counter >= arr[4]) {
        return true;
      }
    }
  }
  return false;
}
