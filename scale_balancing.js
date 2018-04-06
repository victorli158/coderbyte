function scaleBalancing(strArr) { 
  let firstVals = strArr[0].split(',');
  let left = parseInt(firstVals[0].slice(1));
  let right = parseInt(firstVals[1].slice(0, firstVals[1].length - 1));
  let weights = strArr[1].split(', ');
  for (let i = 0; i < weights.length; i++) {
    if (i === 0) {
      weights[i] = parseInt(weights[i].slice(1));
    } else if (i === (weights.length - 1)) {
      weights[i] = parseInt(weights[i].slice(0, weights[i].length - 1));
    } else {
      weights[i] = parseInt(weights[i]);
    }
  }
  let currLeft;
  let currRight;
  for (let i = 0; i < weights.length; i++) {
    currLeft = left;
    currRight = right;
    if (currLeft > currRight) {
      currRight += weights[i];
      if (currRight === currLeft) {
        return weights[i].toString();
      } else {
        for (let j = 0; j < weights.length; j++) {
          if (i === j) { continue; }
          if (currRight > currLeft) {
            currLeft += weights[j];
            if (currRight === currLeft) {
              if (weights[i] < weights[j]) {
                return weights[i].toString() + ',' + weights[j].toString();
              } else {
                return weights[j].toString() + ',' + weights[i].toString();
              }
            } else {
              currLeft -= weights[j];
            } 
          } else if (currLeft > currRight) {
            currRight += weights[j];
            if (currRight === currLeft) {
              if (weights[i] < weights[j]) {
                return weights[i].toString() + ',' + weights[j].toString();
              } else {
                return weights[j].toString() + ',' + weights[i].toString();
              }
            } else {
              currRight -= weights[j];
            }
          }
        }
      }
    } else if (currRight > currLeft) {
      currLeft += weights[i];
      if (currRight === currLeft) {
        return weights[i].toString();
      } else {
        for (let j = 0; j < weights.length; j++) {
          if (i === j) { continue; }
          if (currRight > currLeft) {
            currLeft += weights[j];
            if (currRight === currLeft) {
              if (weights[i] < weights[j]) {
                return weights[i].toString() + ',' + weights[j].toString();
              } else {
                return weights[j].toString() + ',' + weights[i].toString();
              }
            } else {
              currLeft -= weights[j];
            } 
          } else if (currLeft > currRight) {
            currRight += weights[j];
            if (currRight === currLeft) {
              if (weights[i] < weights[j]) {
                return weights[i].toString() + ',' + weights[j].toString();
              } else {
                return weights[j].toString() + ',' + weights[i].toString();
              }
            } else {
              currRight -= weights[j];
            }
          }
        }
      }
    }
  }
  return 'not possible';
}

// This could clearly be refactored to be much better.
// Also, CoderByte has me failing a couple test cases because there are multiple correct answers,
// despite the prompt saying there's only ever one correct possibility in each input test case