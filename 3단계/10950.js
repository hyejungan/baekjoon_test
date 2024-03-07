const fs = require('fs');

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

let input = fs.readFileSync(env).toString().split('\n')

const T = Number(input[0]);

function solution (arr) {
  for(let i = 1; i <= T; i++) {
    const num = arr[i].split(' ').map((n) => +n)
    console.log(num[0] + num[1])
  }
}

solution(input)