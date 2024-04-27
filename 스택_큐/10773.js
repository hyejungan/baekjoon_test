const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [N, ...arr] = fs
  .readFileSync(env)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let stack = [];

for (let i = 0; i < N; i++) {
  if (arr[i] === 0) {
    stack.pop();
  } else {
    stack.push(arr[i]);
  }
}

console.log(stack.reduce((acc, cur) => acc + cur));
