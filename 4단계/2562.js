const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs
  .readFileSync(env)
  .toString()
  .split("\n")
  .map((n) => +n);

function solution(arr) {
  console.log(Math.max(...arr));
  console.log(arr.indexOf(Math.max(...arr)) + 1)
}

solution(input);
