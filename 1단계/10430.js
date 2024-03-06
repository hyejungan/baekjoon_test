const fs = require('fs');

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

const input = fs.readFileSync(env).toString().split(' ').map((num) => +num);

function solution(A, B, C) {
  console.log((A+B)%C);
  console.log(((A%C) + (B%C))%C);
  console.log((A*B)%C);
  console.log(((A%C) * (B%C))%C)
}

solution(input[0], input[1], input[2])