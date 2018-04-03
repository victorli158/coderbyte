function palindromeSwapper(str) {
  if (isPalindrome(str)) {
    return str;
  }
  let chars = str.split('');
  let copy;
  let swap;
  for (let i = 0; i < chars.length - 1; i++) {
    copy = chars.slice();
    swap = copy[i];
    copy[i] = copy[i + 1];
    copy[i + 1] = swap;
    if (isPalindrome(copy.join(''))) {
      return copy.join('');
    }
  }
  return '-1';
}

function isPalindrome(str) {
  let chars = str.split('');
  return chars.join('') === chars.reverse().join('') ? true : false;
}
