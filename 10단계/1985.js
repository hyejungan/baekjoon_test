const fs = require("fs");

const env = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split(" ").map(Number);

let present = input.slice(0, 2);
const start = [0, 0];
const end = input.slice(2);
let result = end[1];

present.map((num, i) => {
  const min = Math.min(...[num - start[i], end[i] - num]);
  result = min < result ? min : result;
});

console.log(result);
