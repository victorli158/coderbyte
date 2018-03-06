function rectangleArea(strArr) { 
  let xCoordinates = [];
  let yCoordinates = [];
  for (let i = 0; i < strArr.length; i++) {
    if (!xCoordinates.includes(strArr[i][1])) {
      xCoordinates.push(strArr[i][1]);
    }
    if (!yCoordinates.includes(strArr[i][3])) {
      yCoordinates.push(strArr[i][3]);
    }
  }
  let width = Math.abs(parseInt(xCoordinates[0]) - Math.abs(parseInt(xCoordinates[1])));
  let height = Math.abs(parseInt(yCoordinates[0]) - Math.abs(parseInt(yCoordinates[1])));
  return width * height;
}
