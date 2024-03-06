const fs = require('fs');

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

console.log(fs.readFileSync(env) - 543)