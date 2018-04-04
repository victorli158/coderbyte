function twoSum(arr) { 
  let target = arr[0];
  let diff;
  let result = '';
  let counts = [];
  for (let i = 1; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    diff = target - arr[i];
    if (arr.includes(diff)) {
      if (diff === target / 2 && counts[arr[i]] < 2) {
        continue;
      }
      result += arr[i] + ',' + diff + ' ';
      arr.splice(arr.indexOf(diff), 1);
      if (arr.includes(diff)) {
        arr.splice(arr.indexOf(diff), 1);
      }
    }
  }
  return result === '' ? -1 : result.trim();
}
