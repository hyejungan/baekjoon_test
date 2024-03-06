const fs = require('fs');

const env = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

let input = fs.readFileSync(env).toString().split(' ').map((num) => +num);

solution(input[0], input[1])

function solution(a,b) {
  console.log(a-b)
}