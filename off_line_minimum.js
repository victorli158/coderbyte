function offLineMinimum(strArr) {
  let removed = '';
  let chars = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'E') {
      removed += chars.sort().shift() + ',';
    } else {
      chars.push(strArr[i]);
    }
  }
  removed = removed.slice(0, removed.length - 1);
  return removed;
}
