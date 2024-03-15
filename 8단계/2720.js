const fs = require('fs')

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

let input = fs.readFileSync(env).toString().split('\n').map(Number);
const COIN = [0.25, 0.10, 0.05, 0.01];

for(let i = 1; i <= input[0]; i++) {
  let result = [];
  COIN.reduce((acc, cur) => {
    let count = Math.floor(acc/(cur*100))
    result.push(count)
    return acc-(cur*100*count)
  }, input[i])
  console.log(result.join(' '))
}
