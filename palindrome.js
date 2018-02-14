function palindrome(str) {
  let letters = str.split('');
  letters = letters.filter((char) => char !== ' ');
  if (letters.length % 2 === 0) {
    let midpoint = (letters.length / 2) - 1;
    return letters.slice(0, midpoint + 1).join('') === letters.slice(midpoint + 1, letters.length).reverse().join('');
  } else {
    let midpoint = Math.floor(letters.length / 2);
    return letters.slice(0, midpoint).join('') === letters.slice(midpoint + 1, letters.length).reverse().join('');
  }
}
