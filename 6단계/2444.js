const fs = require('fs');

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

let num = +fs.readFileSync(env);

for(let i = 1; i <= Math.ceil((2*num-1)/2); i++) {
  console.log(' '.repeat(Math.ceil(((2*num-1)/2) - i)) + '*'.repeat(2*i-1));
}

for(let j = num + 1; j > 2; j--) {
  console.log(' '.repeat(num+1-j+1) + '*'.repeat((j-2)+(j-3)) + ' ')
}
