function otherProducts(arr) {
  let products = [];
  let current;
  for (let i = 0; i < arr.length; i++) {
    current = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) { continue; }
      current = current * arr[j];
    }
    products.push(current);
  }
  let str = '';
  for (let i = 0; i < products.length; i++) {
    str += products[i].toString();
    if (i !== products.length - 1) {
      str += '-';
    }
  }
  return str;
}
