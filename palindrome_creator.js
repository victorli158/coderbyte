function palindromeCreator(str) { 
  if (isPalindrome(str)) {
    return 'palindrome';  
  }
  let chars;
  let remaining;
  for (let i = 0; i < str.length; i++) {
    chars = str.split('');
    chars.splice(i, 1);
    if (isPalindrome(chars.join(''))) {
      return str[i];
    } 
  }
  for (let i = 0; i < str.length; i++) {
    chars = str.split('');
    chars.splice(i, 1);
    for (let j = 0; j < str.length; j++) {
      if (i === j) { continue; }
      remaining = chars.slice();
      remaining.splice(j, 1);
      if (isPalindrome(remaining.join(''))) {
        return i < j ? str[i] + str[j] : chars[j] + str[i];
      }
    }
  }
  return 'not possible';
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('') ? true : false;
}