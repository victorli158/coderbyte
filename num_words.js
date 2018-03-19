const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
  'eighty', 'ninety'];

const scales = ['hundred', 'thousand', 'million', 'billion'];

function numbersToWords(number) {
  if (number === 1000000000) {
    return 'one billion';
  }
  if (number < 1000) {
    return translate(number);
  }
  let resultStr = '';
  let numDigits = number.toString().split('');
  let currentChunk;
  let scalesCounter = 1;
  while (numDigits.length > 0) {
    if (numDigits.length < 3) {
      resultStr = translate(parseInt(numDigits.join(''))) + ' ' + resultStr;
      numDigits = [];
    } else {
      currentChunk = numDigits.splice(numDigits.length - 3, 3);
      resultStr = translate(parseInt(currentChunk.join(''))) + ' ' + resultStr;
    }
    if (numDigits.length === 0) {
      return resultStr;
    }
    resultStr = scales[scalesCounter] + ' ' + resultStr;
    scalesCounter += 1;
  }
}

function translate(number) {
  if (number < 20) {
    return units[number - 1];
  } else {
    let numDigits = number.toString().split('');
    let resultStr = '';
    if (numDigits.length === 3) {
      resultStr += units[parseInt(numDigits[0]) - 1] + ' ';
      resultStr += scales[0] + ' ';
      numDigits.splice(0, 1);
    }
    if (numDigits.length === 2 && numDigits[0] !== '0') {
      resultStr += tens[parseInt(numDigits[0]) - 2] + ' ';
      numDigits.splice(0, 1);
    } else {
      numDigits.splice(0, 1);
    }
    if (numDigits[0] === '0') {
      return resultStr;
    }
    resultStr += units[parseInt(numDigits[0]) - 1];
    return resultStr;
  }
}
