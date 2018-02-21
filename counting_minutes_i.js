function countingMinutesI(str) { 
  let chars = str.split('');
  if (chars[1] === ':') {
    chars.unshift('0');
  }
  if (chars.length < 15) {
    chars.splice(8, 0, '0');
  }
  let firstHours = parseInt(chars[0] + chars[1]);
  let firstMinutes = parseInt(chars[3] + chars[4]);
  let firstAMPM = chars[5] + chars[6];
  let secondHours = parseInt(chars[8] + chars[9]);
  let secondMinutes = parseInt(chars[11] + chars[12]);
  let secondAMPM = chars[13] + chars[14];
  let runningTotal = 0;
  runningTotal += ((secondHours - firstHours) * 60);
  runningTotal += (secondMinutes - firstMinutes);
  if (firstAMPM !== secondAMPM) {
    runningTotal += (12 * 60);
  } else if (runningTotal < 0) {
    runningTotal += (24 * 60);
  }
  return runningTotal;
}
