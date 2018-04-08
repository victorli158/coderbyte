function closestEnemy(arr) { 
  if (!arr.includes(2)) {
    return 0;
  }
  let idx = arr.indexOf(1);
  let counter = 0;
  while (true) {
    counter += 1;
    if (arr[idx + counter] === 2 || arr[idx - counter] === 2) {
      return counter;
    }
  }
}
