function arrayMatching(strArr) {
  let firstArray = strArr[0].split(',');
  let secondArray = strArr[1].split(',');
  let result = '';
  firstArray[0] = firstArray[0].slice(1);
  secondArray[0] = secondArray[0].slice(1);
  firstArray[firstArray.length - 1] = firstArray[firstArray.length - 1].slice(0, firstArray[firstArray.length - 1].length - 1);
  secondArray[secondArray.length - 1] = secondArray[secondArray.length - 1].slice(0, secondArray[secondArray.length - 1].length - 1);
  for (let i = 0; i < firstArray.length; i++) {
    firstArray[i] = firstArray[i].trim();
  }
  for (let j = 0; j < secondArray.length; j++) {
    secondArray[j] = secondArray[j].trim();
  }
  let longest = firstArray.length > secondArray.length ? firstArray.length : secondArray.length;
  for (let k = 0; k < longest; k++) {
    if (firstArray[k] && secondArray[k]) {
      result += (parseInt(firstArray[k]) + parseInt(secondArray[k])).toString() + '-';
    } else if (firstArray[k]) {
      result += firstArray[k] + '-';
    } else {
      result += secondArray[k] + '-';
    }
  }
  return result.slice(0, result.length - 1);
}
