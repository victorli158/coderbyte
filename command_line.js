function commandLine(str) { 
  let pairs = str.split('=');
  let output = pairs[0].length.toString() + '=';
  let current;
  let count;
  for (let i = 1; i < pairs.length - 1; i++) {
    current = pairs[i].split(' ');
    count = 0;
    for (let j = 0; j < current.length - 1; j++) {
      count += current[j].length;
    }
    count += current.length - 2;
    output += count.toString() + ' ' + current[current.length - 1].length + '=';
  }
  output += pairs[pairs.length - 1].length;
  return output;
}
