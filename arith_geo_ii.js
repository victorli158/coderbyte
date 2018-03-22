function arithGeoII(arr) { 
  let firstDiff = arr[1] - arr[0];
  let firstMult = arr[1] / arr[0];
  let arith = true;
  let geo = true;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== firstDiff) {
      arith = false;
    }
    if (arr[i + 1] / arr[i] !== firstMult) {
      geo = false;
    }
    if (!arith && !geo) {
      return -1;
    }
  }
  if (arith) {
    return 'Arithmetic';
  } else if (geo) {
    return 'Geometric';
  }
}
