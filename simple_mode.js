function simpleMode(arr) { 
  let mode;
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    let currCount = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) { continue; }
      if (arr[i] === arr[j]) {
        currCount += 1;
      }
    }
    if (count < currCount) {
      mode = arr[i];
      count = currCount;
    }
  }
  return (count > 1 ? mode : -1);
}
