const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [N, ...arr] = fs.readFileSync(env).toString().trim().split("\n");

let stack = [];
let ans = [];

for (let i = 0; i < N; i++) {
  const [fn, n] = arr[i].split(" ");
  if (fn === "push") {
    stack.push(n);
  } else if (fn === "pop") {
    stack.length > 0 ? ans.push(stack.pop()) : ans.push(-1);
  } else if (fn === "size") {
    ans.push(stack.length);
  } else if (fn === "empty") {
    stack.length === 0 ? ans.push(1) : ans.push(0);
  } else if (fn === "top") {
    stack.length > 0 ? ans.push(stack.at(-1)) : ans.push(-1);
  }
}

console.log(ans.join("\n"));
