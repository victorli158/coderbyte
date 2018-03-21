function division(num1,num2) { 
  let greaterNum = Math.max(num1, num2);
  let oneFactors = [];
  let twoFactors = [];
  for (let i = 0; i <= greaterNum; i++) {
    if (num1 % i === 0) {
        oneFactors.push(i);
    }
    if (num2 % i === 0) {
        twoFactors.push(i);
    }
  }
  let commonFactors = [];
  if (oneFactors.length > twoFactors.length) {
    for (let j = 0; j < oneFactors.length; j++) {
      if (twoFactors.includes(oneFactors[j])) {
        commonFactors.push(oneFactors[j]);
      }
    }
    return commonFactors[commonFactors.length - 1];
  } else {
     for (let j = 0; j < twoFactors.length; j++) {
      if (oneFactors.includes(twoFactors[j])) {
        commonFactors.push(twoFactors[j]);
      }
    }
    return commonFactors[commonFactors.length - 1];
  }
}
