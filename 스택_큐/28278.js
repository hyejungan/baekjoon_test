const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [N, ...arr] = fs.readFileSync(env).toString().trim().split("\n");
let stack = [];
let result = "";

for (let n of arr) {
  let [c, x] = n.split(" ");

  switch (c) {
    case "1":
      stack.push(x);
      break;
    case "2":
      result += (stack.length > 0 ? stack.pop() : -1) + "\n";
      break;
    case "3":
      result += stack.length + "\n";
      break;
    case "4":
      result += (stack.length === 0 ? 1 : 0) + "\n";
      break;
    case "5":
      result += (stack.length > 0 ? stack[stack.length - 1] : -1) + "\n";
      break;
  }
}

console.log(result.slice(0, result.length - 1));
