const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let strings = fs.readFileSync(env).toString().trim().split("\n");
let result = [];

strings.forEach((string) => {
  let stack = [];
  let ans = true;

  for(let s of string){
    if (s === "(" || s === "[") {
      stack.push(s);
    } else if (s === ')') {
      if(stack.length === 0 || stack.pop() !== '(') {
        ans = false;
        break;
      }
    } else if (s === ']') {
      if(stack.length === 0 || stack.pop() !== '[') {
        ans = false;
        break;
      }
    }
  }

  if(ans && stack.length === 0) {
    result.push("yes");
  } else {
    result.push('no');
  }
})

console.log(result.join('\n'))
