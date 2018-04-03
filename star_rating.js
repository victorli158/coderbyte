function starRating(str) {
  if (str === '0.0' || str === '0.00') {
    return 'empty empty empty empty empty';
  }
  let digits = str.split('.');
  let int = parseInt(digits[0]);
  if (digits[1].length === 1) {
    digits[1] += '0';
  }
  let dec = parseInt(digits[1]);
  let rating = '';
  let counter = 0;
  console.log(dec);
  while (counter < int) {
    rating += 'full ';
    counter += 1;
  }
  if (dec === 0) {
    rating = rating.trim();
  } else if (dec < 25) {
    rating += 'empty';
  } else if (dec < 75) {
    rating += 'half';
  } else {
    rating += 'full';
  }
  let words = rating.split(' ');
  while (words.length < 5) {
    words.push('empty');
  }
  return words.join(' ');
}
