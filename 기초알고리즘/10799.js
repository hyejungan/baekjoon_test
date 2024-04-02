const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = require("fs").readFileSync(env).toString().trim();

let stick = [];
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" && input[i + 1] === ")") {
    count += stick.length;
    i++;
  } else if (input[i] === "(") {
    stick.push(input[i]);
  } else {
    stick.pop();
    count += 1;
  }
}

console.log(count);
