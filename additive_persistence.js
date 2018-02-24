function additivePersistence(num) { 
  if (num < 10) {
    return 0;
  }
  let digits = num.toString().split('');
  let times = 0;
  let done = false;
  let total = 0;
  while (done === false) {
    times += 1;
    while (digits.length > 0) {
      total += parseInt(digits[0]);
      digits.shift();
    }
    console.log(total);
    if (total < 10) {
      return times;
    } else {
      digits = total.toString().split('');
      total = 0;
    }
  }
}
