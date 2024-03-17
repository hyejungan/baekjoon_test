const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [a, b, c] = fs
  .readFileSync(env)
  .toString()
  .trim()
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

if (c < a + b) {
  console.log(a + b + c);
} else {
  c = a + b - 1;
  console.log(a + b + c);
}
