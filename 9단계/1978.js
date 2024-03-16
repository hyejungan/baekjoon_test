const fs = require('fs');

const env = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

let input = fs.readFileSync(env).toString().split('\n');

const arr = input[1].split(' ').map(Number);

let count = 0;
for(let num of arr) {
  if (isPrime(num)) {
    count += 1;
  }
}

console.log(count);

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}