function hammingDistance(strArr) { 
  let distance = 0;
  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] !== strArr[1][i]) {
      distance += 1;
    }
  }
  return distance;
}
