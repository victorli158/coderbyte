function productDigits(num) {
  if (num === 1) {
    return 2;
  } else if (num % 10 === 0) {
    return num.toString().length;
  }
  let factors = [];
  for (let i = num; i > 0; i--) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  if (factors.length === 2) {
    return factors.join('').length;
  } else {
    let midpoint = factors.length / 2;
    return factors.slice(midpoint - 1, midpoint + 1).join('').length;
  }
}