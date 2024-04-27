const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [N, ...arr] = fs
  .readFileSync(env)
  .toString()
  .trim()
  .split("\n");

let stack = [];

for (let i = 0; i < Number(N); i++) {
  if (stack.length > 0 && arr[i] == 0) {
    stack.pop();
  } else {
    stack.push(arr[i]);
  }
}

console.log(stack.reduce((acc, cur) => Number(acc) + Number(cur), 0));
