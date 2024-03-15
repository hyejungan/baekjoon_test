const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = +fs.readFileSync(env);

let dot = 2;
for (let i = 0; i < input; i++) {
  dot += Math.pow(2, i);
}

console.log(Math.pow(dot, 2));
