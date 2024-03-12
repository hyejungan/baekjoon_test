const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

function solution(str, n) {
  console.log(str[n - 1]);
}

solution(input[0], Number(input[1]));
