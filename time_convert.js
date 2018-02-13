function timeConvert(num) { 
  let hours = Math.floor(num / 60).toString();
  let minutes = (num % 60).toString();
  return hours + ':' + minutes;
}
