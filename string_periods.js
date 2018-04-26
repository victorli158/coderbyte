function stringPeriods(str) {
  let slice = '';
  let longSlice = '';
  let counter;
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = str.length - 1; j > i; j--) {
      slice = str.slice(i, j);
      longSlice = slice;
      while (longSlice.length < str.length) {
        longSlice += slice;
        console.log(longSlice);
      }
      if (longSlice === str && slice !== str) {
        return slice;
      }
    }
  }
  return -1;
}
