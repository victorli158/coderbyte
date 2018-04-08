function timeDifference(strArr) { 
  let times = [];
  let currentTime;
  let conversion;
  for (let i = 0; i < strArr.length; i++) {
    conversion = 0;
    currentTime = strArr[i].split(':');
    conversion += parseInt(currentTime[0] * 60);
    conversion += parseInt(currentTime[1].slice(0, 2));
    if (currentTime[1].slice(2) === 'pm') {
      conversion += 12 * 60;
    }
    times.push(conversion);
  }
  let diffs = [];
  for (let i = 0; i < times.length; i++) {
    for (let j = i + 1; j < times.length; j++) {
      diffs.push(Math.abs(times[i] - times[j]));
    }
  }
  diffs.sort(function(a, b) { return a - b; });
  return diffs[0];
}
