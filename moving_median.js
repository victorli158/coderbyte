function movingMedian(arr) { 
  let medians = '';
  let slice;
  let windowSize = arr.splice(0, 1);
  let median;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (windowSize > i) {
      slice = arr.slice(i - counter, i + 1).sort(function(a, b) { return a - b; });
      counter++;
    } else {
      slice = arr.slice(i - counter + 1, i + 1).sort(function(a, b) { return a - b; });
    }
    console.log('i: ' + i + ' slice: ' + slice);
    if (slice.length % 2 === 0) {
      median = (slice[Math.floor(slice.length / 2) - 1] + slice[Math.floor(slice.length) / 2]) / 2;
    } else {
      median = slice[Math.floor(slice.length / 2)];
    }
    medians += median.toString() + ',';
  }
  return medians.slice(0, medians.length - 1);
}
