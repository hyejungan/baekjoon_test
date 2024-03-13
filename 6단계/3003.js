const fs = require('fs');

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

let input = fs.readFileSync(env).toString().split(' ').map(Number);
const chess = [1, 1, 2, 2, 2, 8];

function solution (chess, input) {
  let str = '';
  chess.forEach((n, i) => {
    str += n - input[i] + ' '
  })
  console.log(str)
}

solution(chess, input)
