function evenPairs(str) {
  let counter;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && parseInt(str[i]) % 2 === 0) {
      counter = 1;
      while (!isNaN(str[i + counter])) {
        if (parseInt(str[i + counter]) % 2 === 0) {
          return true;
        } else {
          counter += 1;
        }
      }
    }
  }
  return false;
}
