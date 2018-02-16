function secondGreatLow(arr) { 
  if (arr.length === 2) {
    return arr[1].toString() + ' ' + arr[0].toString();
  }
  let sorted = arr.sort(function(a, b) {return a - b});
  console.log(sorted);
  let secondLowest;
  let secondGreatest;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      secondLowest = sorted[i + 1];
      break;
    }
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    if (sorted[j] !== [sorted[j - 1]]) {
      secondGreatest = sorted[j - 1];
      break;
    }
  }
  return secondLowest.toString() + ' ' + secondGreatest.toString();
}
