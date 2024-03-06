const fs = require('fs');

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

let input = fs.readFileSync(env).toString().split('\n')

let front = Number(input[0]);
let back = input[1].split('');

function solution (front, a, b, c, back) {
  console.log(front * a)
  console.log(front * b)
  console.log(front * c)
  console.log(front * back)
}

solution(front, back[2], back[1], back[0], Number(input[1]))