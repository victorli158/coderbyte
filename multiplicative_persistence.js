function multiplicativePersistence(num) { 
  if (num < 10) {
    return 0;
  }
  let digits = num.toString().split('');
  let times = 0;
  let product = 1;
  let done = false;
  while (done === false) {
    times += 1;
    while (digits.length > 0) {
      product *= parseInt(digits[0]);
      digits.shift();
    }
    if (product < 10) {
      return times;
    } else {
      digits = product.toString().split('');
      product = 1;
    }
  }
}
