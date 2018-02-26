function palindromeTwo(str) {
  let chars = str.toLowerCase().split('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let indices = [];
  for (let i = 0; i < chars.length; i++) {
    if (!alphabet.includes(chars[i])) {
      indices.push(i);
    }
  }
  for (let i = indices.length - 1; i >= 0; i--) {
    chars.splice(indices[i], 1);
  }
  let midpoint = Math.floor(chars.length / 2);
  if (chars.length % 2 === 1) {
    return chars.slice(0, midpoint).join() === chars.slice(midpoint + 1).reverse().join();
  } else {
    return chars.slice(0, midpoint).join() === (chars.slice(midpoint).reverse()).join();
  }
}
