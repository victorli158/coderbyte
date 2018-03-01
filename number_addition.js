function numberAddition(str) { 
let chars = str.split('');
let counter = 0;
let currentNumber = '';
let values = [];
while (counter < chars.length) {
  if (!isNaN(parseInt(chars[counter]))) {
  currentNumber = chars[counter];
  while (!isNaN(parseInt(chars[counter]))) {
    counter += 1;
    currentNumber += chars[counter];
  }
  values.push(parseInt(currentNumber));
  }
  counter += 1;
}
let total = 0;
for (let i = 0; i < values.length; i++) {
  total += values[i];
}
return total;
}
