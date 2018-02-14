function arithGeo(arr) {
  let firstDifference = arr[arr.length - 1] - arr[arr.length -2];
  let firstMultiplier = arr[arr.length - 1] / arr[arr.length - 2];
  let arithmetic = true;
  let geometric = true;
  for (let i = arr.length - 1; i > 0; i--) {
    if ((arr[i] - arr[i - 1]) !== firstDifference) {
      arithmetic = false;
    }
    if ((arr[i] / arr[i - 1]) !== firstMultiplier) {
      geometric = false;
    }
  }
  if (arithmetic) {
    return "Arithmetic";
  } else if (geometric) {
    return "Geometric";
  } else {
    return -1;
  }
}
