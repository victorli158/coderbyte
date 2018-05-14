function groupTotals(strArr) {
  let pairs = strArr.map(function(str) {
    return str.split(':');
  });
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
  return returnArr.sort().join(',');
}
