const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim();

let result = [];
for (let i = 0; i < input.length; i++) {
  result.push(input.slice(i));
}

console.log(result.sort().join("\n"));
