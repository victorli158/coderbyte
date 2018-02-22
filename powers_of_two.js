function powersOfTwo(num) { 
  let powers = [2];
  let populating = true;
  let counter = 2;
  let currentPower;
  while (populating === true) {
    if (num <= powers[0]) {
      console.log('done');
      populating = false;
      break;
    } else {
      console.log(Math.pow(2, counter));
      powers.unshift(Math.pow(2, counter));
      counter += 1;
    }
  }
  return powers.includes(num);
}
