function groupTotals(strArr) { 
  let pairs = strArr.map(function(str) {
    return str.split(':');
  });
  console.log(pairs);
  let counts = {};
  for (let i = 0; i < pairs.length; i++) {
    if (counts[pairs[i][0]]) {
      counts[pairs[i][0]] += parseInt(pairs[i][1]);
    } else {
      counts[pairs[i][0]] = parseInt(pairs[i][1]);
    }
  }
  let returnArr = [];
  for (var key in counts) {
    if (counts[key] !== 0) {
      returnArr.push(`${key}:${counts[key]}`);
    }
  }
  returnArr.sort(function(a, b) {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
  return returnArr.join(',');
}
