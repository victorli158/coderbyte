function GCF(arr) {
  let firstFactors = [];
  let secondFactors = [];
  arr = arr.sort(function(a,b) { return a - b });
  for (let i = 1; i <= arr[0]; i++) {
    if (arr[0] % i === 0) {
      firstFactors.push(i);
    }
    if (arr[1] % i === 0) {
      secondFactors.push(i);
    }
  }
  for (let j = secondFactors.length - 1; j >= 0; j--) {
    if (firstFactors.includes(secondFactors[j])) {
      return secondFactors[j];
    }
  }
}
