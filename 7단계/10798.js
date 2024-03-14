const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const max = Math.max(...input.map((str) => str.length));

let result = "";
for (let i = 0; i < max; i++) {
  input.map((str) => {
    if (str[i]) result += str[i];
  });
}

console.log(result);
