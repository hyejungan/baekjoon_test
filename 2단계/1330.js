const fs = require('fs');

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

let input = fs.readFileSync(env).toString().split(' ').map((num) => +num);

function solution (a, b) {
  console.log((a>b) ? '>' : (a === b) ? '==' : '<')
}

solution(input[0], input[1])