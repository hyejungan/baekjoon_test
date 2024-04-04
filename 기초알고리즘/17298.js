const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [N, numbers] = require("fs").readFileSync(env).toString().split("\n");

N = Number(N);
let arr = numbers.split(" ").map(Number);
let stack = [];
let result = [];

for(let i = 0; i < N; i++) {
  while(stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    result[stack.pop()] = arr[i];
  }
  stack.push(i)
}

while(stack.length) {
  result[stack.pop()] = -1
}

console.log(result.join(' '))

