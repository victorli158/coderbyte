function arrayAdditionI(arr) { 
  let sorted = arr.sort(function(a, b) {return b - a});
  let greatest = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (greatest - sorted[i] === 0 || greatest + sorted[i] === 0) {
      return "true";
    } else if (greatest - sorted[i] < 0) {
      continue;
    } else {
      greatest = greatest - sorted[i];
    }
  }
  return "false";
}
