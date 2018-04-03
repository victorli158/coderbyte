function serialNumber(str) {
  let sets = str.split('.');
  if (sets.length < 3) {
    return false;
  }
  for (let i = 0; i < sets.length; i++) {
    if (sets[i].length < 3) {
      return false;
    }
    if (i === 1) {
      let firstTotal = 0;
      for (let j = 0; j < sets[1].length; j++) {
        firstTotal += parseInt(sets[0][j]);
      }
      if (firstTotal % 2 === 1) {
        return false;
      }
    }
    if (i === 2) {
      let secondTotal = 0;
      for (let j = 0; j < sets[1].length; j++) {
        secondTotal += parseInt(sets[1][j]);
      }
      if (secondTotal % 2 === 0) {
        return false;
      }
    }
    if (parseInt(sets[i][0] + sets[i][1] > sets[i][2])) {
      return false;
    }
  }
  return true;
}
