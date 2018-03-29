function rectangleArea(strArr) {
  let xCoords = [];
  let yCoords = [];
  let current;
  for (let i = 0; i < strArr.length; i++) {
    current = strArr[i].split(' ');
    current[0] = current[0].slice(1);
    if (current[1].length === 3) {
      current[1] = current[1].slice(0, 2);
    } else {
      current[1] = current[1].slice(0, 1);
    }
    xCoords.push(parseInt(current[0]));
    yCoords.push(parseInt(current[1]));
  }
  xCoords.sort(function(a, b) { return a - b; });
  yCoords.sort(function(a, b) { return a - b; });
  let length = xCoords[3] - xCoords[0];
  let height = yCoords[3] - yCoords[0];
  return length * height;
}
