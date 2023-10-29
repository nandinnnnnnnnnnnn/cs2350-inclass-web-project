function getMax(x, y, z) {
  return Math.max(x, y, z);
}

function getMin(x, y, z) {
  return Math.min(x, y, z);
}

function getMean(x, y, z) {
  return (x + y + z) / 3;
}

function compare(word1, word2) {
  if (word1 === word2) {
    return 0;
  } else if (word1 > word2) {
    return 1;
  } else {
    return -1;
  }
}

function getCharPerLine(str, indent) {
  const lines = str.split('').filter(char => char !== ' ');
  if (indent) {
    return lines.map((char, index) => '  '.repeat(index) + char).join('\n');
  } else {
    return lines.join('\n');
  }
}

function arrow(size) {
  if (size <= 0) {
    return '';
  }

  let result = '';
  for (let i = 1; i <= size; i++) {
    result += '*'.repeat(i) + '\n';
  }
  for (let i = size - 1; i > 0; i--) {
    result += '*'.repeat(i) + '\n';
  }
  return result;
}

console.log(getCharPerLine("Hello World!", false));
console.log(getCharPerLine("Hello World!", true));
console.log(arrow(3));
console.log(arrow(7));
