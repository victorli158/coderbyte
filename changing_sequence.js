function changingSequence(arr) { 
  let initialDirection = arr[0] > arr[1] ? 'down' : 'up';
  let direction = initialDirection;
  for (let i = 1; i < arr.length; i++) {
    if (direction !== initialDirection) {
      return i - 1;
    }
    if (arr[i] > arr[i + 1]) {
      direction = 'down';
    } else {
      direction = 'up';
    }
  }
  return -1;
}
