const fs = require('fs');

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

let input = fs.readFileSync(env).toString().split(' ').map((num) => +num);

console.log(input[0] + input[1]);
console.log(input[0] - input[1]);
console.log(input[0] * input[1]);
console.log(parseInt(input[0] / input[1]));
console.log(input[0] % input[1]);